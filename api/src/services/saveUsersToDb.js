const { User } = require('../db');
const users = require('../utils/users')


module.exports = async () => {
    try {
        let count = 0;
        for(let user of users){
            const {name, email, roleId,sid} = user
            await User.create({name, email, roleId,sid})
            count++
        }
        console.log(`Successfully created ${count} Users`)
    } catch (error) {
        console.log('Error al cargar usuarios', error)
    }
}