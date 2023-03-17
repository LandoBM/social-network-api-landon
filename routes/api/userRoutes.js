const router = require('express').Router()

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userCont.js')

// Get/Post All Users at /api/users
router.route('/').get(getAllUsers).post(createUser)
// GET/PUT/DELETE User by ID
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser)
// ADD/DELETE Friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports =router