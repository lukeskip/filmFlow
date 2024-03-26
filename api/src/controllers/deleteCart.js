const { Cart } = require('../db');

module.exports = async (id) => {
    try {
        const data = {}
        const cart = await Cart.findOne({
            where : {
                
            }})
        if(rows){
            return data.exit = 'Pelicula eliminada con exito'
        }
        return data.message = 'Pelicula no existe'
    } catch (error) {
        return error
    }
}