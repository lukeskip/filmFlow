const {User, Role} = '../db.js';
module.exports = async(sid)=>{
    const isAdmin = false;
    const user = User.findOne({where:{sid}});
    const role = Role.findOne({where:{role:"admin"}});
    if(user.roleid === role.id) isAdmin = true;
    return isAdmin;
}