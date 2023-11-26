const express = require('express')
const app = express()

const todoRoutes = require('./routes')

app.use(express.json())
app.use(todoRoutes)

app.listen(3333, () => console.log('server up on 3333'))
