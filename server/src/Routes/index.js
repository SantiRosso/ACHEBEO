const { Router } = require("express");
const router = Router();
const moviesRouter = require("./Movies/movies.js");

router.use("/movies", moviesRouter);

module.exports = router;
