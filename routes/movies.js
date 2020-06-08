let express = require("express");
let router = express.Router();
let moviesController = require("../controllers/moviesController.js");

router.get("/movies", moviesController.list);
router.get("/movies/recommended", moviesController.recommended);
router.get("/movies/detail/:id", moviesController.detail);
router.get("/movies/search", moviesController.search);
router.post("/movies/search", moviesController.searchResult);
router.get("/movies/new", moviesController.new);

module.exports = router;
