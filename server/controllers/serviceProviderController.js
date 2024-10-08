const ServiceProvider = require("../models/serviceProviderModel.js");
const Service = require("../models/services.js");
const {
    fetchAllServiceProviders,
} = require("../services/serviceProviderService.js");


const addServiceProvider = async (req, res) => {
    const { username,phoneNumber, email, password, serviceDetails } = req.body;

    try {
        // Create and save the ServiceProvider first
        const newServiceProvider = new ServiceProvider({
            username,
            email,
            password,
            phoneNumber // You should hash the password before storing it in production
        });

        // Save the ServiceProvider
        const savedServiceProvider = await newServiceProvider.save();
        console.log("ServiceProvider saved:", savedServiceProvider);

        // Process the service details and associate them with the saved service provider
        const serviceDocs = serviceDetails.map(service => {
            // Create an object to store the service data
            const serviceDoc = {
                serviceProvider: savedServiceProvider._id, // Associate service with the created ServiceProvider
                serviceName: service.serviceName, // Assuming serviceName is required
            };

            // Conditionally add other fields only if they are present
            if (service.locations) {
                serviceDoc.locations = service.locations;
            }
            if (service.guests) {
                serviceDoc.guests = service.guests;
            }
            if (service.parkingNumbers) {
                serviceDoc.parkingNumbers = service.parkingNumbers;
            }
            if (service.landArea) {
                serviceDoc.landArea = service.landArea;
            }
            if (service.advanceBooking) {
                serviceDoc.advanceBooking = service.advanceBooking;
            }
            if (service.totalCost) {
                serviceDoc.totalCost = service.totalCost;
            }
            if(service.chargesPerSquareFeet){
                serviceDoc.chargesPerSquareFeet = service.chargesPerSquareFeet;
            }
            if(service.densityBalloons){
                serviceDoc.densityBalloons = service.densityBalloons;
            }
            if(service.maximumLandCoverage){
                serviceDoc.maximumLandCoverage = service.maximumLandCoverage;
            }
            if(service.vegMenu){
                serviceDoc.vegMenu = service.vegMenu;
            }
            if(service.nonvegMenu){
                serviceDoc.nonvegMenu = service.nonvegMenu;
            }
            if(service.cameraDetails){
                serviceDoc.cameraDetails = service.cameraDetails;
            }
            if(service.costPerPhoto){
                serviceDoc.costPerPhoto = service.costPerPhoto;
            }
            if(service.photoMaterial){
                serviceDoc.photoMaterial = service.photoMaterial;
            }
            return serviceDoc; // Return the constructed serviceDoc object
        });

        console.log("Service Docs to be saved:", serviceDocs); // Log serviceDocs for debugging

        // Insert services into the database
        const savedServices = await Service.insertMany(serviceDocs);
        console.log("Services saved:", savedServices);

        // Send success response with the created ServiceProvider and its associated services
        res.status(201).json({
            message: "ServiceProvider and services added successfully.",
            serviceProvider: savedServiceProvider,
            services: savedServices,
        });
    } catch (error) {
        console.error("Error during service provider creation:", error); // Log the error for debugging
        if (error.code === 11000) {
            // Handle unique constraint violation
            res.status(400).json({ message: "Username or email already exists" });
        } else {
            res.status(500).json({ message: "Error creating service provider", error: error.message });
        }
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
