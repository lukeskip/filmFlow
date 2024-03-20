const genres = require('../utils/genres');
const { Genre } = require('../db');
module.exports = async()=>{
   
    for (genre of genres) {
        const [newGenre, created] = await Genre.findOrCreate({
        where: { name: genre },
        });

        if (created) {
        console.log(`${newGenre} was created`);
        }
    }
    
}