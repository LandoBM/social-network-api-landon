const {Thought, User} = require('../models')
const {ObjectId} =require('mongoose').Types

module.exports = {
    // Get All thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
    // Get A single thought
    getAThought(req, res) {
        Thought.find({ _id: req.params.thoughtId})
        .select('-__v')
        .then((thought) =>
        !thought
            ? res.status(404).json({message: 'No Thought with this ID'})
            : res.json(thought))
    },
    // Create a thought
    createThought(req,res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },
    // Delete A thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId})
            .then((thought) =>
                !thought 
                    ? res.status(404).json({message: 'No Thought with this ID'})
                    : User.deleteMany({ _id: {$in: thought.users}})
            )
            .then(() => res.json({message: 'User and Thought Deleted'}))
            .catch((err) => res.status(500).json(err))
    },
    // Update Thought
    updateThought(req,res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'No Thought with this ID'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
    // Add Reaction to thought
    addReaction(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'No User found with this ID'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
    // Delete Reaction from thought
    deleteReaction(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'No User found with this ID'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
}
