const { Movie, Genre } = require('../db');

module.exports = async (id)=>{
    try {
        const data = {};
        const movie = await Movie.findByPk(id, {
            include : {
                model: Genre,
                required: true
            }
        })
        if(movie){
            return data.content = movie
        }
        return data.message = 'No existe pelicula con ese Id'
    } catch (error) {
        return error
    }



}