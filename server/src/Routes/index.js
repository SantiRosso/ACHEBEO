const { Router } = require("express");
const router = Router();
const movies = require("./Movies/movies.routes.js");
const genres = require("./Genres/genres.routes.js");
const series = require("./Series/series.routes.js");
const users = require("./Users/users.routes.js");
const profiles = require("./Users/users.routes.js");

router.use("/movies", movies);
router.use("/genres", genres);
router.use("/series", series);
router.use("/users", users);
router.use("/profiles", profiles);

module.exports = router;
