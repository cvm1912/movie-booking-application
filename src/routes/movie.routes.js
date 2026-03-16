const express = require('express');
const router = express.Router();
const { createMovie, getMovies,updateMovie, deleteMovie} = require('../controller/movie.controller');  

// create a new movie
router.post('/movies-booking/api/v1/movies', createMovie);
router.get('/movies-booking/api/v1/movies', getMovies);
router.delete('/movies-booking/api/v1/movies/:id', deleteMovie);
router.put('/movies-booking/api/v1/movies/:id', updateMovie);
router.patch('/movies-booking/api/v1/movies/:id', updateMovie);

module.exports = router;
