const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      min: 1,
      max: 280,
    },
  },
  {
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateForm(createdAtVal),
    },
  },
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
