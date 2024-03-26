const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("genre", {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    emoji: {
      type: DataTypes.STRING,
      allowNull: true,
      binary: true // Importante para emojis
    }
  });
};

