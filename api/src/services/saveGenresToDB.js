const genres = require('../utils/genres');
const { Genre } = require('../db');

module.exports = async()=>{
    let count = 0
    for (genre of genres) {
        const [newGenre, created] = await Genre.findOrCreate({
        where: { name: genre },
        });

        if (created) {
        count++
        }
    }
    console.log(`Successfully created ${count} genres`);
}