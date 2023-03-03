const {Schema, model, Types} = require('mongoose')
const dateForm = require('../utils/dateForm.js')

const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            require: true,
            min: 1,
            max: 280
        },
    },
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateForm(createdAtVal)
        }
    },
    {
        username: {
            type: String,
            require: true
        }
    },
    {
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
)

// Create Reaction Schema with array of nested documents of reactionID, reactionBody, username, and createdAt.
// This will not be a model, but rather will be used as the reaction field's sub-document schema in the Thought model.
const reactionSchema = new Schema(
    {
        reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        min: 1,
        max: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateForm(createdAtVal),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
  thoughtSchema.virtual('reactionCount').get(() => {
    return this.reactions.length
  })

  const Thought = model('Thought', thoughtSchema)
  module.exports = Thought