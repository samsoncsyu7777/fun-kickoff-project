const mongoose = require("mongoose");
const { weeklyAvailability } = require("./availability");
const { paymentProfile } = require("./paymentProfile");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true
  },
  birth: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  description: {
    type: String
  },
  availability: {
    type: weeklyAvailability
  },
  paymentProfile: {
    type: paymentProfile
  },
  photo: {
    type: String
  }
});

module.exports = User = mongoose.model("Profile", profileSchema);