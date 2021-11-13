const mongoose = require("mongoose");
const { weeklyAvailability } = require("./availability");
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true,
    uppercase: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  availability: {
    type: weeklyAvailability,
  },
  photo: {
    type: String,
  },
  isSitter: {
    type: Boolean,
  },
});

module.exports = User = mongoose.model("Profile", profileSchema);
