const { Movie } = require('../db');

module.exports = async (id) => {
    try {
        const data = {}
        const rows = await Movie.destroy({where : {id}})
        if(rows){
            return data.exit = 'Pelicula eliminada con exito'
        }
        return data.message = 'Pelicula no existe'
    } catch (error) {
        return error
    }
}