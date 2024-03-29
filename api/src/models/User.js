const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    family_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    given_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    sid: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    roleId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {paranoid : true});
};

