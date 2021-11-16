const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const Profile = require("../models/Profile");

// @route POST /profile/create
// @desc Create user profile with valid token
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const id = req.user.id;
  const reqBody = req.body;

  const profileExists = await Profile.exists({ userId: id });
  if (profileExists) {
    res.status(409);
    throw new Error("The profile of this user has been created already");
  }

  const newProfile = await Profile.create({
    userId: id,
    firstName: reqBody.firstName,
    lastName: reqBody.lastName,
    gender: reqBody.gender,
    birth: reqBody.birth,
    phone: reqBody.phone,
    address: reqBody.address,
    description: reqBody.description,
    availability: reqBody.availability,
    photo: reqBody.photo,
    isSitter: reqBody.isSitter,
  });

  if (!newProfile) {
    res.status(500);
    throw new Error("Server failed to create the new profile");
  }

  res.status(201).send({
    message: "The new profile has been successfully created",
    data: newProfile,
  });
});

// @route GET /profile
// @desc Get user profile with valid token
// @access Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const id = req.user.id;

  if (id != req.body.userId) {
    res.status(403);
    throw new Error(
      "Unauthorized request. The client does not have access rights to the content."
    );
  }

  const profile = await Profile.findOne({ userId: id });

  if (!profile) {
    res.status(404);
    throw new Error("No profile found for this client");
  }

  res.status(200).send({
    message: "The profile of this client has been successfully loaded",
    data: profile,
  });
});

// @route Patch /profile/update
// @desc Update user profile with valid token
// @access Private
exports.patchProfile = asyncHandler(async (req, res, next) => {
  const id = req.user.id;
  const reqBody = req.body;

  if (id !== reqBody.userId) {
    res.status(403);
    throw new Error(
      "Unauthorized request. The client does not have update rights to the content."
    );
  }

  const updatedProfile = await Profile.findOneAndUpdate({ userId: id }, body, {
    new: true,
  });

  if (!updatedProfile) {
    res.status(500);
    throw new Error("Server failed to update the profile");
  }

  res
    .status(200)
    .send({ message: "The profile has been successfully updated", data: updatedProfile });
});

// @route GET /profile/all
// @desc Get all user profiles with valid token
// @access Private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    res.status(403);
    throw new Error(
      "Unauthorized request. The client does not have access rights to the content."
    );
  }
  
  const profilesArray = await Profile.find({});

  if (Array.isArray(profilesArray) && profilesArray.length === 0) {
    res.status(500);
    throw new Error("Server failed to get a list of profiles");
  }
  
  res
  .status(200)
  .send({ message: "A list of the profiles has been successfully loaded", data: profilesArray });
});
