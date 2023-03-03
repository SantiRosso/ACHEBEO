const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getMovies = async () => {
  try {
    const result = await axios.get(``);
    return result.data;
    //enviar a base de datos?
    //elegir los datos que se van a retornar
  } catch (error) {
    throw new Error(error);
  }
};

const getMovieById = async (id) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getMovies, getMovieById };
