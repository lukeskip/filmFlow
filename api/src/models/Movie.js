const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Movie', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poster: {
            //Provisional
            type: DataTypes.STRING,
            allowNull: false,
        },
        director: {
            //Provisional
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            //Provisional
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('approved', 'pending', 'declined'),
            allowNull: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    })
}