const { Router } = require("express");
const router = Router();
const moviesRouter = require("./Movies/movies.routes.js");
const genresRouter = require("./Genres/genres.routes.js");
const genresSeries = require("./Series/series.routes.js");
const usersRouter = require("./Users/users.routes.js");

router.use("/movies", moviesRouter);
router.use("/genres", genresRouter);
router.use("/users", usersRouter);
router.use("/series", genresSeries);

module.exports = router;
