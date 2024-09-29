const ServiceProvider = require("../models/serviceProviderModel.js");
const {
    fetchAllServiceProviders,
} = require("../services/serviceProviderService.js");
const bcrypt = require('bcrypt'); // For password hashing

const addServiceProvider = async (req, res) => {
    const { username, email, password, serviceTypes, locations } = req.body;

    console.log("Received data:", locations);

    // Check for required fields
    if (!username || !email || !password || !serviceTypes || !Array.isArray(serviceTypes) || serviceTypes.length === 0) {
        return res.status(400).json({
            message: "All fields, including service types, are required.",
        });
    }

    // Hash the password before saving it
    // const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Convert serviceTypes to array of objects
    const serviceTypeObj = serviceTypes.map(type => ({ serviceName: type }));

    // Ensure locations is an array; if it's a string, split it into an array
    const newLocations = Array.isArray(locations) ? locations : locations.split(" ").filter(Boolean);

    console.log(newLocations);

    try {
        // Create a new service provider with services
        const newServiceProvider = new ServiceProvider({
            username,
            email,
            password: password, // Store the hashed password
            services: serviceTypeObj, // Map the array of strings to array of objects
            locations: newLocations,
        });

        // Save the new service provider to the database
        await newServiceProvider.save();

        // Respond with success message
        return res.status(201).json({
            message: "ServiceProvider registered successfully",
            serviceProvider: newServiceProvider,
        });
    } catch (error) {
        // Respond with error message in case of any failure
        return res.status(500).json({
            message: "Error creating serviceProvider",
            error: error.message,
        });
    }
};

const getAllServiceProviders = async (req, res) => {
    try {
        const serviceProviders = await fetchAllServiceProviders();
        return res.json(serviceProviders);
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching service providers.",
            error: error.message,
        });
    }
};

const loginServiceProvider = async (req, res) => {
    const { email, password } = req.body;
    try {
        const serviceProvider = await ServiceProvider.findOne({ email });
        if (!serviceProvider) {
            return res.status(404).json({ message: "Service provider not found." });
        }

        const validPassword = password == serviceProvider.password; // Compare hashed password
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password." });
        }

        return res.status(200).json({
            message: "Logged in successfully.",
            serviceProvider,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error during login." });
    }
};

module.exports = {
    getAllServiceProviders,
    addServiceProvider,
    loginServiceProvider,
};
