const Router = require("express");
const router = Router();
const { getMovies, getMovieById, getMovieByName } = require("./controllers.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) return res.send(await getMovieByName(name))
    res.send(await getMovies());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await getMovieById(id));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
