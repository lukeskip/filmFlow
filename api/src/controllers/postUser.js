const { User } = require("../db");
module.exports = async (body) => {
  const { email, password, passwordConfirm,img,dob,roleID } = body;
  if (email && password && passwordConfirm) {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password,isActive:true,img,dob,roleID:2 },// estoy estableciendo temporalmente un rol 2 esperando la creación de la relación entre usuario y rol
    });
    if (created) {
      return res
        .status(201)
        .json({ access: true, message: "usuario creado", user });
    } else {
      return res
        .status(500)
        .json({ message: `${email} ya existe en la base de datos` });
    }
  }

  return res.status(500).json({ message: "faltan datos" });
};

