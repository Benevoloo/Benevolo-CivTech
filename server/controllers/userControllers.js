const { isAuthorized } = require('../utils/auth-utils');
const User = require('../models/User');

exports.createUser = async (req, res) => {
  const { username, password, name, contact_info, zipcode, bio, is_neighbor } = req.body;

  // TODO: check if username is taken, and if it is what should you return?
  const user = await User.create(username, password, name, contact_info, zipcode, bio, is_neighbor);
  req.session.userId = user.id;

  res.send(user);
};

exports.listUsers = async (req, res) => {
  const users = await User.list();
  console.log(users)
  res.send(users);
};

exports.listUsersByZip = async (req, res) => {
  const { zipcode } = req.body;
  
  const users = await User.listUsersByZip(zipcode);
  res.send(users);
};

// exports.findUserById = async (req, res) => {
//   const { id } = req.params

//   const user = await User.find(id)
//   res.send(user)
// }

exports.findUserByUsername = async (req, res) => {
  const { username } = req.body

  const user = await User.findByUsername(username)
  res.send(user)
}

exports.showUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

exports.updateUser = async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;

  // Not only do users need to be logged in to update a user, they
  // need to be authorized to perform this action for this particular
  // user (users should only be able to change their own profiles)
  if (!isAuthorized(id, req.session)) return res.sendStatus(403);

  const updatedUser = await User.update(id, username);
  if (!updatedUser) return res.sendStatus(404)
  res.send(updatedUser);


//Cloudinary endpoint to handle image uplaods
const cloudinary = require('../utils/cloudinaryConfig');
const uploadImage = async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'ml_default',
    });
    res.json({ url: uploadedResponse.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Image upload failed' });
  }
};
uploadImage()
};