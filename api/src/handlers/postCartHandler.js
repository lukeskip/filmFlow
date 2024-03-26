const postCart = require("../controllers/postCart")

module.exports = async (req, res) => {
    try {
        const { movieId, userId } = req.body

        const data = await postCart(movieId, userId)

        if(data.message){
            res.status(404).json(data.message)
        } 

        res.status(200).json({message : 'Pelicula añadida al carrito con exito'})
    } catch (error) {
        res.status(500).json(error)
    }
} 