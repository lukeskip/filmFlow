const {Genre} = require('../db')
module.exports = async ()=>{
    try {
        const genres = await Genre.findAll()
        return genres
    } catch (error) {
        console.log(error)
        return error
    }    
}