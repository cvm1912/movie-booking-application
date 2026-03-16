const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String, 
        unique: true,
        required: true,
        minLength:2
    },
    description :{
        type: String,
        required: true,
        minLength:5
    },
    casts:{
        type: [String],
        required: true
    },
    trailerURL:{
        type: String,
        required: true
    }, 
    language:{
        type: [String], 
        required: true,
        default:"hindi"
    },
    releaseDate:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    }, 
    releaseStatus:{
        type: String,
        required: true,
        enum: ["RELEASED", "UNRELEASED", "BLOCKED"]
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
},{timestamps: true});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;