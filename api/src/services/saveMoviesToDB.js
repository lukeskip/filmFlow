const movies = require('../utils/movies');
const { Movie, Genre } = require('../db');

module.exports = async () => {
    let count = 0
    try {
        for (const actualMovie of movies) {
            const { name, director, genres, description, duration, country, poster } = actualMovie;

            const [movie, created] = await Movie.findOrCreate({
                where: { name },
                defaults: {
                    director,
                    description,
                    duration,
                    country,
                    poster,
                    status: "pending",
                    isActive: true,
                }
            });

            if (!created) continue;

            const genresArray = genres.split(',').map(genre => genre.trim());

            for (const genreName of genresArray) {
                let genre = await Genre.findOne({ where: { name: genreName } });

                await movie.addGenre(genre);
            }
            count++
        }

        console.log(`Successfully created ${count} movies`);
    } catch (error) {
        console.error('Error saving movies to the database:', error);
    }
};
