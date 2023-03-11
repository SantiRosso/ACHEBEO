const { Router } = require("express");
const router = Router();
const {
  getSeries,
  getSerieById,
  getSeriesByName,
} = require("./controllers.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) return res.send(await getSeriesByName(name));
    res.send(await getSeries());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await getSerieById(id));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
