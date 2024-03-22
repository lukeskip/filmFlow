const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    dob: {
      type: DataTypes.STRING, //CAMBIAR A DATE
      allowNull: false,
    },
    roleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {paranoid : true});
};

