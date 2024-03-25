const { User } = require('../db');
const users = require('../utils/users')


module.exports = async () => {
    try {
        let count = 0;
        for(let user of users){
            const {name, email, password, token, img, dob, roleID} = user
            await User.create({name, email, password, token, img, dob, roleID})
            count++
        }
        console.log(`Successfully created ${count} Users`)
    } catch (error) {
        console.log('Error al cargar usuarios', error)
    }
}