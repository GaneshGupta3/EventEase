const userModel = require('../models/userModel');

const fetchAllUsers = async () => {
  return await userModel.find(); // Assuming you're using a database like MongoDB
};

module.exports = { fetchAllUsers };
