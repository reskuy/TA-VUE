const express = require('express')
const cors = require("cors")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const users = express.Router()
const User = require("../models/users");

users.use(cors())
process.env.SECRET_KEY = 'secret'

//bagian get atau read
users.get('/user', (req, res) => {
    User.find({}, 'username password', function (error, user) {
      if (error) { console.error(error); }
      res.send({
        user: user
      })
    })
  })

//bagian post 
users.post('/user', (req, res) =>{
  const today = new Date()
  const userData = {
     username : req.body.username,
     password : req.body.password,
     passwordcheck: req.body.password,
     created : today
  }
  User.findOne({
    username: req.body.username
  })
  .then(user =>{
      if(!user){
        bcrypt.hash(req.body.password, 10, (err, hash) =>{
          userData.password = hash
          User.create(userData)
          .then(user =>{
            res.json({status: user.username + 'terdaftar'})
          })
          .catch(err =>{
            res.send('error' + err)
          })
        })
      }else{
        res.json({error: 'User udah ada'})
      }
  })
  .catch(err =>{
    res.send('error' + err)
  })

    //  new_user = new User({
    //     username : username,
    //     password : password
    // })
    // new_user.save(function (error){
    //     if (error){
    //         console.log(error)
    //     }
    //     res.send({
    //         success : true,
    //         message: 'di simpan'
    //     })
    // })
})

//bagian fetch user
users.get('/user/:id', (req, res) => {
    let db = req.db;
    User.findById(req.params.id, 'username password passwordcheck', function (error, akun) {
      if (error) { console.error(error); }
      res.send(akun)
    })
  })
  
//bagian update
users.put('/user/:id', (req, res) => {
    User.findById(req.params.id, 'username password passwordcheck', function (error, user) {
      user.username = req.body.username
      user.password = req.body.password
      user.passwordcheck = req.body.password
      user.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  })

//Bagian Delete
users.delete('/user/:id', (req, res) => {
  let db = req.db;
  User.remove({
    _id: req.params.id
  }, function(err, user){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

//login
users.post('/user/login', (req, res) => {
  User.findOne({
    username: req.body.username
  }).then(user => {
    if(user){
      if(bcrypt.compareSync(req.body.password, user.password)) {
        const payload = {
          _id : user._id,
          username : user.username,
        }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
      }else{
        res.json({error : 'pass salah'})
      }
    }else{
      res.json({error : 'user ga ada'})
    }
  }).catch(err =>{
    res.send('error' + err)
  })
})


module.exports = users;