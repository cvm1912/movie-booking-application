const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const env = require('dotenv').config();
const mongoose = require('mongoose');

const movieRoutes = require('./src/routes/movie.routes');   


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// test the server 

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.use(movieRoutes);

mongoose.connect(process.env.DB_URL + process.env.DB_NAME)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`server is running on http://localhost:${process.env.PORT}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));
