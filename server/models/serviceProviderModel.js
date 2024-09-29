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
        username: {  
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
        services: [serviceSchema],
        reviews: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User', // Reference to User schema
                },
                comment: {
                    type: String,
                },
                rating: {
                    type: Number,
                    min: 1,
                    max: 5,
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    { timestamps: true }
);

// Create the ServiceProvider model
const ServiceProvider = mongoose.model("ServiceProvider", ServiceProviderSchema);

module.exports = ServiceProvider;
