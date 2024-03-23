const { Movie,Genre } = require('../db')
const cloudinary = require('cloudinary').v2;
require("dotenv").config();
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

module.exports = async (body) => {
    try {
        const data = {}

        let { name, director, genres, description, duration, country, file} = body;

        if (![name, director, genres, description, duration, country, file].every(Boolean)) {
            return data.message = "Faltan datos"
        }
        const status = "pending" 

        //Cloudinary:
        const buffer = Buffer.from(file);

        const cloudinaryResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({ folder: "movies"}, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result)
                })
                .end(buffer);
        })

        const poster = cloudinaryResponse.secure_url;
        //Cloudinary

        const [movie, created] = await Movie.findOrCreate({
            where: { name },
            defaults: { poster, director, description, duration, country, status },
        });

        
        if(created){
            genres = genres.split(',').map((item) => item.trim());
            for (genre of genres) {
                const genreDB = await Genre.findOne({
                    where: { name: genre },
                });
                
                if(genreDB){
                    movie.addGenre(genreDB);
                }
            }
        }

        if (!created) {
            return data.message = "Ya hay una pelicula con ese nombre"
        }

        return data.movie = movie
    } catch (error) {
        return error
    }
}