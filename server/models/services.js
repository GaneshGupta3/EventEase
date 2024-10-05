const mongoose = require("mongoose") ;
const  ServiceProvider =require("./serviceProviderModel");

const serviceSchema = new mongoose.Schema(
  {
    serviceProvider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceProvider", // Reference the model name as a string
      required: true // Ensure that a service provider must be referenced
    },
    serviceName: {//done
      type: String,
      required: true, // Consider making it required if necessary
    },
    locations : {
      type: [String],
      required : true
    },
    guests : {
      type: String,
      // required : true,
    },
    parkingNumbers : {
      type : String,
      // required : true
    },
    landArea : {
      type : String ,
      // required : true
    },
    advanceBooking : {
      type : String, 
      // required : true
    },
    totalCost : {
      type : String ,
      // required : true 
    },
    chargesPerSquareFeet: {
      type : String,
    },
    densityBalloons : {
      type : String,
    },
    maximumLandCoverage : {
      type : String,
    },
    costPerPlate : {
      type : String,
    },
    foodHours:{
      type : String
    },
    vegMenu : {
      type : [String]
    },
    nonvegMenu:{
      type : [String]
    }
  },
  { timestamps: true } // Optionally add timestamps for createdAt and updatedAt
);

// Create the Service model
const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
