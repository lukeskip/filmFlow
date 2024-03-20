const { Movie } = require('../db')

module.exports = async function getMovies(){
    try {
        let data = {}
        const movies = await Movie.findAll()
        if(movies.length === 0){
            return data.message = 'No hay Peliculas'
        }
        return data.content = movies
    } catch (error) {
        return error
    }
}