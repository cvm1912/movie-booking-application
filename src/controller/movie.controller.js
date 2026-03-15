const Movie = require('../models/movie.model');

/**
 * 
 * @param {*} req {name, description, casts, trailerURL, language, releaseDate, director, releaseStatus}
 * @param {*} res {success, message, error, data}
 * @returns movie created successfully or error creating movie
 */

const createMovie = async(req,res) =>{

    try{
        const movie  = await Movie.create(req.body);
        return res.status(201).json({
            success: true,
            error:{}, 
            message: "Movie created successfully",
            data: movie
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating movie",
            error: error.message || error,
            data: {}
        });
    }
}

module.exports = {
    createMovie
}