const Service = require("../models/services.js");

const getServices = async (req, res) => {
  try {
    const services = await Service.find({}).populate('serviceProvider') // Fetch all users from the service
    res.json(services); // Return the list of users as JSON
  } catch (error) {
    res
      .status(500)
      .json({ state: "getting services error", message: error.message }); // Handle errors
  }
};

module.exports = { getServices };