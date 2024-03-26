const { Movie, User, Cart } = require('../db')

module.exports = async (movieID, userID) => {
    try {
        const data = {}

        const movie = await Movie.findByPk(movieID)
        if (!movie) {
            return data.message = 'Error encontrando peliculas con ese Id'
        }

        const user = await User.findByPk(userID)
        if (!user) {
            return data.message = 'Error al encontrar el usuario'
        }

        if (!data.message) {
            const cart = await Cart.create({
                movieId: movieID,
                userId: userID,
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

