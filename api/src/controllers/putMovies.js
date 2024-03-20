const { Movie } = require('../db')

module.exports = async (id, body) => {
    try {
        const data = {}
        const movie = await Movie.findOne({where : {id}})
        if(movie){
            for(let key in body){
                movie[key] = body[key] ? body[key] : movie[key]
            }
            await movie.save()
            return data.movie = movie
        }
        return data.message = 'No existe pelicula con ese Id'
    } catch (error) {
        return error
    }
}