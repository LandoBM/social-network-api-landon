const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomThoughts, getRandomUser, getRandomReac, createEmail } = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
    console.log('connection secured')

    // Drop existing thoughts
    await Thought.deleteMany({})

    // Drop Users
    await User.deleteMany({})

    // Create empty array to hold the users and thoughts
    const user = []
    const thought = []
    const reaction = []
    // Loop 5 times -- add Users to user array
    for(let i = 0; i < 5; i++) {
        const username = getRandomUser()
        const email = createEmail()
        
        user.push({
            username,
            email
        })
        thought.push({
            username,
            email,
            thoughtText: getRandomThoughts(),
            reaction: getRandomReac()
        })

    }
    
    // Add user to the collection and await results
    await User.collection.insertMany(user)

    // Add courses to the collection and await the results
    await Thought.collection.insertMany(thought)
    await Thought.collection.insertMany(reaction)

    // Log out the seed data to indicate what should show in the database
    console.table(user)
    console.table(thought)
    console.info('Done Seeding! 🌱')
    process.exit(0)


})
