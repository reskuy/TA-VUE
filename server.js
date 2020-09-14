const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const bcrypt = require('bcrypt')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
//koneksi mongodb
let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://reskuy:123@cluster0.1sky4.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "koneksi error"));
db.once("open", function(callback){
  console.log("mongoDB Udah Konek");
});

let User = require('./src/users')

app.use('/api', User)

//listen port expressnya
app.listen(process.env.PORT || 5000)
