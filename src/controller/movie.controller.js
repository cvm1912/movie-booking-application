const Movie = require('../models/movie.model');
const MovieService = require('../services/movie.service');
const {successResponseBody, errorResponseBody} = require('../utils/responsebody');

/**
 * 
 * @param {*} req {name, description, casts, trailerURL, language, releaseDate, director, releaseStatus}
 * @param {*} res {success, message, error, data}
 * @returns movie created successfully or error creating movie
 */



const createMovie = async(req,res) =>{
    try{
        const movie  = await MovieService.createMovie(req.body);
        successResponseBody.data = movie,
        successResponseBody.message = "Movie created successfully",
        successResponseBody.err = {},
        successResponseBody.success = true
        return res.status(201).json(successResponseBody);
    
    } catch (error) {
        errorResponseBody.err = error || error,
        errorResponseBody.message = "Error creating movie",
        errorResponseBody.data = {},
        errorResponseBody.success = false
        return res.status(500).json(errorResponseBody);
    }
}


const getMovies = async (req,res) =>{
    try{
        const movies = await Movie.find({});
        successResponseBody.data = movies,
        successResponseBody.message = "Movies fetched successfully",
        successResponseBody.err = {},
        successResponseBody.success = true  
        return res.status(200).json(successResponseBody);
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message || error,
            message: "Error fetching movies",
            data: {}
        })
    }
}

const getMovie = async (req,res) =>{
    try{
        const movie = await MovieService.getMoviebyId(req.params.id);
        if(movie.err){
            errorResponseBody.err = response.err,
            errorResponseBody.message = "Movie not found with the corresponding id",
            errorResponseBody.data = {},
            errorResponseBody.success = false
            return res.status(404).json(errorResponseBody);
        }
        return res.status(200).json({
            success: true,
            data: movie,
            message: "Movie fetched successfully",
            error:{}
        });

    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message || error,  
            message: "Error fetching movie",
            data:{}
        });
    }
}

const updateMovie = async (req,res) =>{
    try{
        const movie = await MovieService.updateMovie(req.params.id, req.body);
        successResponseBody.data = movie,
        successResponseBody.message = "Movie updated successfully",
        successResponseBody.err = {},
        successResponseBody.success = true  
        return res.status(200).json(successResponseBody);

    }catch(error){
        errorResponseBody.err = error || error,
        errorResponseBody.message = "Error updating movie",
        errorResponseBody.data = {},
        errorResponseBody.success = false
        return res.status(500).json(errorResponseBody);
    }
}

const deleteMovie = async (req,res) =>{
    try{
        const {id} = req.params;
        const movie = await MovieService.deleteMovie(id);
        if(!movie){
            return res.status(404).json({
               success: false,
               message: "Movie not found with the corresponding id",
               error: "No movie found with the corresponding id",
               data: {}
            });
        }   
        return res.status(200).json({
            success: true,
            data: movie,
            message: "Movie deleted successfully",
            error:{}
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            data:{},
            error: error.message || error,
            message: "Error deleting movie"
        })
    }
}

module.exports = {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
}
