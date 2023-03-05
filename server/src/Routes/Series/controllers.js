const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getSeries = async () => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`
    );
    return result.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const getSerieById = async (id) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3//tv/${id}?api_key=${API_KEY}`
    );
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getSeriesByName = async (name) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/tv?query=${name}&api_key=${API_KEY}`
    );
    return result.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getSeries, getSerieById, getSeriesByName };
