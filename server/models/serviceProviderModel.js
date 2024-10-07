const mongoose = require("mongoose");

const ServiceProviderSchema = new mongoose.Schema(
    {
        username: {  
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            required: true,
            type: String
        },
    },
    { timestamps: true }
);

// Enforce the unique index at the database level for username and email
ServiceProviderSchema.index({ username: 1 }, { unique: true });
ServiceProviderSchema.index({ email: 1 }, { unique: true });

const ServiceProvider = mongoose.model("ServiceProvider", ServiceProviderSchema);

// Sync indexes to enforce unique constraints in the database
ServiceProvider.syncIndexes();

module.exports = ServiceProvider;
