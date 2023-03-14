const { Thought, User} = require('../models')
const { ObjectId } = require('mongoose').Types

module.exports = {
    // Get Al  Users
    getAllUsers(req, res){
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    // Create User
    createUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },
    // Get User by ID
    getUserById(req, res){
        User.findOne({ _id: req.params.id})
        .then((user) => 
            !user
                ?res.status(404).json({message: 'No User found with ID'})
                : res.json((user))
        )
        .catch((err)=> res.status(500).json(err))
    },
    // Update User Info
    updateUser(req,res){
        User.findOneAndUpdate(
            { _id: req.params.id},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) => {
            !user
                ? res.status(404).json({message: 'User not found'})
                : res.json(user)
        })
        .catch((err) => res.status(500).json(err))
    },
    // Delete User
    deleteUser(req, res){
        User.findByIdAndDelete({ _id: req.params.id})
        .then((user) => 
            !user
                ? res.status(404).json({message: 'No User Found'})
                : Thought.deleteMany({_id: {$in: user.thoughts}})
        )
        .then(() => res.json({message: 'User and Data Deleted'}))
        .catch((err)=> res.status(500).json(err))
    },
    // Add a Friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {friends: req.params.friendsId}},
            {runValidators: true, new: true}
        )
        .then((user) => 
        !user
            ? res.status(404).json({message: 'Friend not found'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    // Remove Friend
    removeFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {friends: req.params.friendsId}},
            {runValidators: true, new: true}
        )
        .then((user)=>
            !user
                ? res.status(404).json({message: 'Friend not found with ID'})
                : res.json(user)
        )
        .catch((err)=> res.status(500).json(err))
    }

}