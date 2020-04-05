const router = require('express').Router()
const auth = require('../middleware/auth')

// Note Model
const Note = require('../../models/Notes')

// @route GET api/notes
// @desc Get all notes
// @access Public
router.get('/' , (req,res) => {
    Note.find()
        .sort({
            date : -1
        })
        .then(notes => res.json(notes))
        .catch(err => res.json({
            "message" : err.message
        }))
})

// @route POST api/notes
// @desc Create an note
// @access Public
router.post('/' , auth , (req,res) => {
    
    const newNote = new Note({
        name : req.body.name
    })

    newNote.save()
        .then(note => res.status(201).json(note))

})

// @route DELETE api/notes/:id
// @desc Delete an note
// @access Public
router.delete('/:id' , auth , (req,res) => {
    Note.findById(req.params.id)
        .then(note => note.remove()
                             .then(() => res.json({"id" : note._id}))
        ).catch(err => res.status(404).json({ success : false , message : err.message}))
        
})

module.exports = router