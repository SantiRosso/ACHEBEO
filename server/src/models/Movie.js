const { DataTypes } = require('sequelize')

module.exports = sequelize => {
    sequelize.define('movie', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
        },
    })
}