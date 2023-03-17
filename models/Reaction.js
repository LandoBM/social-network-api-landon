const { Schema, Types} =require('mongoose')

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
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema