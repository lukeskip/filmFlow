const { User } = require('../db');
const users = require('../utils/users')


module.exports = async () => {
    try {
        for(let user of users){
            const {name, email, password, token, img, dob, roleID} = user
            await User.create({name, email, password, token, img, dob, roleID})
        }
        console.log('Successfully created 3 Users')
    } catch (error) {
        console.log('Error al cargar usuarios')
    }
}