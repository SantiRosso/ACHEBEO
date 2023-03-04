const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("movie", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  });
};
