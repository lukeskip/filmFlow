const { Content } = require('../db')

module.exports = async function getMovies(){
    try {
        let data = {}
        const movies = await Content.findAll()
        if(movies.length === 0){
            return data.message = 'No hay Peliculas'
        }
        return data.content = movies
    } catch (error) {
        return error
    }
}