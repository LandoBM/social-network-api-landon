const thoughts = [
    'why are blueberries not blue?',
    'in order to sleep we first pretend to sleep',
    'cannot wait until the cabin trip',
    'party party party',
    'Beyonce is going on tour.. yesss',
    'Going out this weekend should be fun',
    'Getting a new puppy!',
    'Learning React soon should make my forehead hurt',
    'GA Tech is elite'
]

const users = [
    'boobear123',
    'ravenswing556',
    'gymguyzion',
    'nikkid',
    'jamesdurden',
    'kimkardashian1',
    'mikeljj',
    'noahcyrus',
    'beyhive223',
    'stanleylew',
    'ericaB',
    'samJJ',
    'quez456',
    'stormyBBY'
]

const reactions = [
    'instead they are blue',
    'in order to wake up we first dream that we a re awake',
    'which cabin in the woods will you be visiting?',
    'where the party at?',
    'Uncle Johnny made that dress, that cheap spandex she looks a mess',
    'Can not wait to catch up with you',
    'I heard golden doodles are the cutest, but a doberman is it!',
    'learning any new programming language will always make your forehead hurt first',
    'Elite is the new way of thinking'
]

// Get a random item given an array
const getRandomArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get Random User
const getRandomUser = () => `${getRandomArray(users)}`

// Get Random thoughts
const getRandomThoughts = () => `${getRandomArray(thoughts)}`

// Get Random Reactions
const getRandomReac = () => `${getRandomArray(reactions)}`
console.log(getRandomArray(reactions))

// Create User Email
const createEmail = () => `${getRandomArray(users)}`+ '@icloud.com'

module.exports = {getRandomThoughts, getRandomReac, getRandomUser, createEmail}