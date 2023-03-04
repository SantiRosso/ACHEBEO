const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Genre } = require("../../db.js");

const getGenres = async () => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3//genre/movie/list?api_key=${API_KEY}`
    );
    await Genre.bulkCreate(result.data.genres);
    //agregar géneros a la base de datos
    return result.data.genres;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getGenres };
