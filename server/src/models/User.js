const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
        },
        genre: {
            type: DataTypes.ENUM('male', 'female', 'others'),
        }
    });
};
