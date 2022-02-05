const mongoose = require("mongoose");
const validator = require("validator");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  name: {
    type: String,
  },

  image: {
    type: String,
  },

  password: {
    type: String,
    required: true,
    minlength: [6, "password can't be less than 6 charaacter"],
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },

  image: {
    type: String,
  },

  location: {
    type: String,
  },

  type: {
    type: String,
    required: true,
    trim: true,
  },

  slug: { type: String, slug: "username", unique: true },

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

const User = mongoose.model("User", userSchema);

module.exports = User;
