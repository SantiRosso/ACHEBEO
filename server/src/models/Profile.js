const { DataTypes } = require('sequelize')

module.exports = sequelize => {
    sequelize.define('profile', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
        },
    })
}