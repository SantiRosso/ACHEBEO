const Router = require("express");
const router = Router();
const { getMovies } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getMovies());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router