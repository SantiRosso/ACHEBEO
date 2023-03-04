const { Router } = require("express");
const router = Router();
const { getSeries } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getSeries());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
