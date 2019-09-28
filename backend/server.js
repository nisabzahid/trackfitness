const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config;


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI; following the cour .env.ATLAS_URI gives error so used hardcoded in mongoose.connect
//console.log("line 15");
mongoose.connect('mongodb+srv://db:passwordtooeasy@cluster0-jsrb7.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
//console.log("line 17");
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb connection stablished successfully");
});
//console.log("line 22");

const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);



app.listen(port, () => {
    console.log(`server is running on ${port}.`);
});