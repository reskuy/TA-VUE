const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var Post = require("../models/post");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//koneksi mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://reskuy:123@cluster0.1sky4.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "koneksi error"));
db.once("open", function(callback){
  console.log("sukses bos");
});

//bagian get atau read
app.get('/akun', (req, res) => {
    Post.find({}, 'username password', function (error, akun) {
      if (error) { console.error(error); }
      res.send({
        akun: akun
      })
    })
  })

//bagian post atau insert ke db collection
app.post('/akun', (req, res) =>{
    var db = req.db;
    var username = req.body.username;
    var password = req.body.password;
    var new_post = new Post({
        username : username,
        password : password
    })
    new_post.save(function (error){
        if (error){
            console.log(error)
        }
        res.send({
            success : true,
            message: 'di simpan'
        })
    })
})


//listen port expressnya
app.listen(process.env.PORT || 5000)