const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Content', {
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
        genre: {
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
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    })
}