const Movie = require('../models/movie.model');

const createMovie = async(data)=>{
  const movie = await Movie.create(data);
  return movie;
}

const getMoviebyId  = async(movieId) =>{
   const movie = await Movie.findById(movieId);
   if(!movie){
      return {
        err:"No movie found with the corresponding id",
      }
    }
    // if find the movie then return the movie
    return movie
}


const updateMovie = async(movieId, data)=>{
  const movie = await Movie.findByIdAndUpdate(movieId, data, {new: true}, runValidators = true);
  return movie;
}

const deleteMovie = async(movieId) =>{
  const movie = await Movie.findByIdAndDelete(movieId);
  return movie;
}

module.exports = {getMoviebyId, createMovie, updateMovie, deleteMovie}