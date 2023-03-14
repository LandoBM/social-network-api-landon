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

// GET Thoughts /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// GET/PUT/DELETE Thoughts by ID /api/thoughts/:id
router.route('/:id').get(getAThought).put(updateThought).delete(deleteThought)

// POST/DELETE Reactions
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
router.route('/:thoughtId/reactions').post(addReaction)

module.exports =router