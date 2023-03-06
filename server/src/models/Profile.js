const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("profile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    myListMovies: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    myListSeries: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  });
};
