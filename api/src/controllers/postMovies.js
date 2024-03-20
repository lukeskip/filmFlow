const { Movie } = require('../db')

module.exports = async (body) => {
    try {
        const data = {}

        // const { name, poster, director, genre, description, duration, type, country, status, isActive} = body;
        const { name, poster, director, genre, description, duration, country} = body;

        if (![name, poster, director, genre, description, duration, country].every(Boolean)) {
            return data.message = "Faltan datos"
        }
        const status = "pending" 
        const isActive = true

        const [content, created] = await Movie.findOrCreate({
            where: { name },
            defaults: { poster, director, genre, description, duration, country, status, isActive },
        })

        if (!created) {
            return data.message = "Ya hay una pelicula con ese nombre"
        }

        return data.content = content
    } catch (error) {
        return error
    }
}