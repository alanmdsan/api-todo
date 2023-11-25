const express = require("express")

const todoRoutes = express.Router()

const allTodos = [
    {
        title: '1 note',
        description: 'hello, it is my first note',
        favorite: false,
        color: '#fff'
    }
]

todoRoutes.get('/todos', (req, res) => {
    return res.status(200).json(allTodos)
})

todoRoutes.post('/todos', (req, res) => {
    const { title, description, favorite, color } = req.body
    allTodos.push({
        title,
        description,
        favorite,
        color
    })
    return res.status(201).json(allTodos)
})

module.exports = todoRoutes