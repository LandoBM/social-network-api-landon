const thoughts = [
    'why are blueberries not blue?',
    'in order to sleep we first pretend to sleep',
    'cannot wait until the cabin trip',
    'party party party',
    'Beyonce is going on tour.. yesss'
]

const users = [
    'boobear123',
    'ravenswing556',
    'gymguyzion',
    'nikkid'
]

const reactions = [
    'instead they are blue',
    'in order to wake up we first dream that we a re awake',
    'which cabin in the woods will you be visiting?',
    'where the party at?',
    'Uncle Johnny made that dress, that cheap spandex she looks a mess'
]

// Get a random item given an array
const getRandomArray = (arr) = arr[Math.floor(Math.random() * arr.length)]

// Get Random User
const getRandomUser = () => `${getRandomArray(users)}`

// Get Random thoughts
const getRandomThoughts = () => `${getRandomArray(thoughts)}`

// Get Random Reactions
const getRandomReac = () => `${getRandomArray(reactions)}`

// Create User Email
const createEmail = () => `${getRandomArray(users)}`+ 'icloud.com'

module.exports = {getRandomThoughts, getRandomReac, getRandomUser, createEmail}