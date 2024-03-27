const { Movie, User, Cart } = require('../db')

module.exports = async (req) => {
    try {
        const data = {}
        const body = req.body;
        const user = req.user;
        const { movieId } = body;
        const userId = user.id;

        const movie = await Movie.findByPk(movieId)
        if (!movie) {
            return data.message = 'Error encontrando peliculas con ese Id'
        }

        if (!data.message) {
            const cart = await Cart.create({
                movieId,
                userId,
            });
            if (!cart) {
                return data.message = 'Error al añadir la pelicula al carrito'
            }
        }
        
        return data
    } catch (error) {
        return error
    }
}

