const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("user", {
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    roleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  });
};

