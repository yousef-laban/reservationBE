const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resevationSchema = new Schema({
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  Status: {
    type: String,
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // toJSON: { virutuals: true },
  // toObject: { virutuals: true },
});

const Resevation = mongoose.model("Resevation", resevationSchema);

module.exports = Resevation;
