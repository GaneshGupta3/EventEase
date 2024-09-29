const mongoose = require("mongoose");

// Define Service Schema
const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true // Ensuring that service name is mandatory
    }
});

// Define Service Provider Schema
const ServiceProviderSchema = new mongoose.Schema(
    {
        username: {  
            type: String,
            required: true,
            unique: true // Ensure unique index is applied to "username"
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Email validation
        },
        password: {
            type: String,
            required: true
            // Use bcrypt for password hashing when storing
        },
        services: {
            type: [serviceSchema],
            validate: [arrayLimit, 'A provider must have at least one service'] // Ensure at least one service
        },
        locations : {
            type: [String],
            // required: true
        },
        reviews: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                    unique: true // Prevent multiple reviews from the same user
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

// Helper function to validate array length
function arrayLimit(val) {
    return val.length > 0;
}

// Create the ServiceProvider model
const ServiceProvider = mongoose.model("ServiceProvider", ServiceProviderSchema);

module.exports = ServiceProvider;
