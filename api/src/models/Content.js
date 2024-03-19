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
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        type: {
            //Provisional
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            //Provisional
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
}