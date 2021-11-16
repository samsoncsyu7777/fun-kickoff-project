const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  getProfile,
  patchProfile,
  getAllProfiles,
} = require("../controllers/profile");

router.route("/profile/create").post(protect, createProfile);

router.route("/profile").get(protect, getProfile);

router.route("/profile/update").patch(protect, patchProfile);

router.route("/profile/all").get(protect, getAllProfiles);

module.exports = router;
