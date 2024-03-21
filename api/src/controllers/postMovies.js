const { Movie,Genre } = require('../db')

module.exports = async (body) => {
    try {
        const data = {}

        let { name, poster, director, genres, description, duration, country} = body;

        if (![name, poster, director, genres, description, duration, country].every(Boolean)) {
            return data.message = "Faltan datos"
        }
        const status = "pending" 
        const isActive = true

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