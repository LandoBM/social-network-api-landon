const router = require('express').Router()

const {
    getThoughts,
    getAThought,
    deleteThought,
    createThought,
    updateThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtCont.js')


module.exports =router