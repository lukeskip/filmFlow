const { User } = require('../db');

module.exports = async (id) => {
    try {
        const data = {}
        const rows = await User.destroy({where : {id}})
        if(rows){
            return {status:true}
        }
        return {status:false}
    } catch (error) {
        return error
    }
}