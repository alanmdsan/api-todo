const express = require('express')
const mongoose = require('mongoose')

const app = express()

// config data
const port = 3333
const mongo_user = 'shawwhip'
const mongo_password = 'FauWSTN1w535RkJb'

const todoRoutes = require('./routes')

app.use(express.json())
app.use(todoRoutes)

app.listen(port, () => {
  mongoose.connect(
    `mongodb+srv://${mongo_user}:${mongo_password}@api-todo.cdxzivu.mongodb.net/?retryWrites=true&w=majority`
  )
  console.log(`app listening on ${port}`)
})
