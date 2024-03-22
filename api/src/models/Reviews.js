const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "reviews",
    {
      comment: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      points : {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      paranoid: true,
    }
  );
};
