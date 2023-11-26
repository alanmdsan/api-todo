const express = require('express')
const mongoose = require('mongoose')

const todoRoutes = express.Router()

const Note = mongoose.model('Note', {
  title: String,
  description: String,
  favorite: Boolean,
  color: String
})

todoRoutes.get('/todos', async (req, res) => {
  const notes = await Note.find()
  return res.status(200).json(notes)
})

todoRoutes.post('/todos', async (req, res) => {
  const { title, description, favorite, color } = req.body
  const note = new Note({
    title,
    description,
    favorite,
    color
  })
  await note.save()
  return res.status(201).json(note)
})

module.exports = todoRoutes
