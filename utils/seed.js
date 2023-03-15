const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomThoughts, getRandomUser, getRandomReac, createEmail } = require('./data')

connection.model('error', (err) => err)

connection.once('open', async () => {
    console.log('connection secured')

    // Drop existing thoughts
    await Thought.deleteMany()

    // Drop Users
    await User.deleteMany()

    // Create empty array to hold the users and thoughts
    const users = []
    const thought = []

    // Loop 3 times -- add Users to user array
    for(let i = 0; i < 3; i++) {
        const username = getRandomUser()
        const email = createEmail()
        username.push({
            username,
            email
        })
    }
    
    // Add user to the collection and await results
    await User.collection.insertMany(users)

    // Add courses to the collection and await the results
    await Thought.collection.insertMany(thought)

    // Log out the seed data to indicate what should show in the database
    console.table(users)
    console.info('Done Seeding!')
    process.exit(0)


})
