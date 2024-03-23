const { Movie,Genre } = require('../db')
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dtn2ewtqg', 
  api_key: '954151344782929', 
  api_secret: 'BEtSAB3khkGHjkp9KpvCOkFmQbg' 
});

module.exports = async (body) => {
    try {
        const data = {}

        let { name, director, genres, description, duration, country} = body;

        if (![name, director, genres, description, duration, country].every(Boolean)) {
            return data.message = "Faltan datos"
        }
        const status = "pending" 
        const isActive = true

        //Cloudinary:
        const image = body.get("image");
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const cloudinaryResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({}, (err, result) => {
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