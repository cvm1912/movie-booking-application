const express = require('express');
const router = express.Router();
const { createMovie } = require('../controller/movie.controller');  

// create a new movie
router.post('/movies-booking/api/v1/movies', createMovie);

module.exports = router;
