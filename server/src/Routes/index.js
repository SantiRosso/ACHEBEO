const { Router } = require("express");
const router = Router();
const moviesRouter = require("./Movies/movies.js");
const genresRouter = require("./Genres/genres.js");

router.use("/movies", moviesRouter);
router.use("/genres", genresRouter);

module.exports = router;
