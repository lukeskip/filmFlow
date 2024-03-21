const { Movie, Genre } = require('../db');
const { Op } = require("sequelize");
const orderFunction = require('../helpers/order')


module.exports = async function getMovies(query){
    let {search, genre, orderType, order} = query;
    type = orderType || ""; /*Tipo de orden (duration, name)*/ 
    order = order || "asc"; /*Orden ascendente o descendente, por default ascendente */
    try {
        let data = {}
        let options = {
            include:{
                model:Genre
            }
        }; 

        if(search){
            options.where = {
                name: {
                    [Op.iLike]: `%${search}%`
                }
            }
        }

        if(genre){    
            genre = genre.split(',').map((item) => item.trim());
            options.include = {
                ...options.include,
                where: { 
                    name: { 
                      [Op.or]: genre // Filtra por uno o más géneros
                    }
                },
            }
        }
        
        const movies = await Movie.findAll({...options})

        if(movies.length === 0){
            return data.message = 'No hay Peliculas'
        }

        return data.content = await orderFunction(type, order, movies)
    } catch (error) {
        console.log(error)
        return error
    }
}