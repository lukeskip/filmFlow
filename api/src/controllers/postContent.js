const { Content } = require('../db')

module.exports = async function postContent (body) {
    try {
        const data = {}

        const { name, poster, director, genre, description, duration, country, status} = body;

        if (![name, poster, director, genre, description, duration].every(Boolean)) {
            return data.message = "Faltan datos"
        }

        const [content, created] = await Content.findOrCreate({
            where: { name },
            defaults: { poster, director, genre, description, duration, country, status, isActive:false },
        })

        if (!created) {
            return data.message = "Ya hay una pelicula con ese nombre"
        }

        return data.content = content
    } catch (error) {
        return error
    }
}