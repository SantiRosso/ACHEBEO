const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("movie", {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
    },
  });
};
