const axios = require("axios");

const getMovies = async () => {
  try {
    const result = await axios.get("link");
    return result.data;
    //enviar a base de datos?
    //elegir los datos que se van a retornar
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getMovies };
