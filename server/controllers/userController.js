const User = require("../models/userModel");
const userService = require("../services/userService");

const getUsers = async (req, res) => {
  try {
    const users = await userService.fetchAllUsers(); // Fetch all users from the service
    res.json(users); // Return the list of users as JSON
  } catch (error) {
    res
      .status(500)
      .json({ state: "getting user error", message: error.message }); // Handle errors
  }
};

const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  const existingUseremail = await User.findOne({ email: email });
  const existingUsername = await User.findOne({ username: username });

  if (existingUseremail) {
    return res
      .status(400)
      .json({ message: "User already exists with this email" });
  }

  if (existingUsername) {
    return res
      .status(400)
      .json({ message: "User already exists with this username" });
  }

  try {
    // Create a new user instance
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const userExists = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email: email });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the hashed password with the provided password
    const validPassword = user.password == password;
    if (validPassword) {
      return res
        .status(200)
        .json({ message: "Logged in successfully", username: user.username,userDetails : user });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUsers, addUser, userExists };
