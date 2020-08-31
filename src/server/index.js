projectData = {};
const dotenv = require('dotenv')
dotenv.config();
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');




const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
const webpack = require('webpack');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  })

// I added this snipet of code because of the requirements MeaningCloud API

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   });
// This route send the GET response to the browser
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

const apiKey = process.env.API_KEY;

app.get('/keyCall', (req, res)=>{
    res.send({key:apiKey})
    console.log(apiKey)
})

app.get('/all', (req, res)=>{
    res.send(projectData)
})


app.post('/add', (req, res) =>{
    projectData.properNoun = req.body.properNoun;
    console.log(projectData)
    res.send(true)
})

