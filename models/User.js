// Define Mongoose
// const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')
const validateEmail = function(email) {
    let mail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    return mail.test(email)
}


// Create a new instance of Mongoose schema to define shape of each document
const userSchema = new Schema(
    {
        username: {type: String, 
        unique: true,
        required: true, 
        trim: true
        },

        email: {type: String, 
        require: 'Email is required', 
        unique: true,
        validate: [validateEmail, 'Enter a valid email address'],
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Enter a valid email address']
        },
        
        thoughts: [
            { type: Schema.Types.ObjectId,
        ref:'Thoughts'}
        ],
        
        friends: [
            {type: Schema.Types.ObjectId,
        ref:'User'}
        ],
    },
    {
        toJSON: {
            getters: true 
        },
    }
)

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
// userSchema.virtual('friendCount').get(() => {
//     return this.friends.length
// })

const User = model('User', userSchema)
module.exports = User