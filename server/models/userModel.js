const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  bookedServices: [
          {
          serviceProviderId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'ServiceProvider', // Reference to ServiceProvider schema
          },
          eventDate: {
              type: Date,
              required: true,
          },
          budget: {
              type: Number,
              required: true,
          },
          status: {
              type: String,
              enum: ['Pending', 'Completed', 'Cancelled'],
              default: 'Pending',
          },
          createdAt: {
              type: Date,
              default: Date.now,
          },
      },
  ],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
