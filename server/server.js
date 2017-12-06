const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Instagram = require('./models/Instagram')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__YOUR_DB__')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

const firstPost = {
  title: 'Dogs rule',
  img: 'https://dog.jpg',
  caption: 'this is a picture of my dog in action!'
}

// Create a Post:

app.post('/api/instaGram', (req, res) => {
  const {title, img, caption} = req.body
  const newPost = {title, img, caption}

  Instagram (newPost).save((err, savedPost) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', data: savedPost})
    }
  })
})

// Created Post()

app.get('/api/instaGram', (req, res) => {
  Instagram.find((err, post) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', post})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port} 🐨 🐨 🐨 🐨 🐨 🐨`))

module.exports = server
