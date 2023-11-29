const express = require('express')
const mongoose = require('mongoose')

const notesRoutes = express.Router()

const Note = mongoose.model('Note', {
  title: String,
  description: String,
  favorite: Boolean,
  color: String
})

// GET
notesRoutes.get('/notes', async (req, res) => {
  const notes = await Note.find()
  return res.status(200).json(notes)
})

// POST
notesRoutes.post('/notes', async (req, res) => {
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

// PUT
notesRoutes.put('/notes/:id', async (req, res) => {
  const { title, description, favorite, color } = req.body
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      favorite,
      color
    },
    {
      new: true
    }
  )
  return res.status(200).json(note)
})

// DELETE
notesRoutes.delete('/notes/:id', async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id)
  return res.status(200).json(note)
})

module.exports = notesRoutes
