const { Router } = require("express");
const router = Router();
const { getGenres } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getGenres());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
