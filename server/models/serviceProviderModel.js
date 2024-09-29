const mongoose = require("mongoose");

// Define Service Schema
const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    }
});

// Define Service Provider Schema
const ServiceProviderSchema = new mongoose.Schema(
    {
        username: {  // Ensure this field name is correct
            type: String,
            required: true,
            unique: true // Ensure unique index is applied to "username", not "userName"
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        services: [serviceSchema]
    },
    { timestamps: true }
);

// Create the ServiceProvider model
const ServiceProvider = mongoose.model("ServiceProvider", ServiceProviderSchema);

module.exports = ServiceProvider;