const ServiceProvider = require("../models/serviceProviderModel.js");
const {fetchAllServiceProviders} = require("../services/serviceProviderService.js");

const addServiceProvider = async (req, res) => {
    const { username, email, password, serviceTypes } = req.body;
  
    console.log("Received data:", username, email, password, serviceTypes);
  
    if (!username || !email || !password || !serviceTypes || serviceTypes.length === 0) {
      return res.status(400).json({ message: 'All fields, including service types, are required.' });
    }
  
    try {
      // Create a new service provider with services
      const newServiceProvider = new ServiceProvider({
        username,  // Ensure this is correctly passed
        email,
        password,
        services: serviceTypes.map(service => ({ serviceName: service.serviceName }))
      });
  
      // Save the new service provider to the database
      await newServiceProvider.save();
  
      // Respond with success message
      return res.status(201).json({
        message: "ServiceProvider registered successfully",
        ServiceProvider: newServiceProvider
      });
  
    } catch (error) {
      // Respond with error message in case of any failure
      return res.status(500).json({ message: 'Error creating serviceProvider', error: error.message });
    }
  };
  
  

const getAllServiceProviders = async(req,res) => {
    try {
       
        const serviceProviders = await fetchAllServiceProviders();
        
        return res.json(serviceProviders);

    } catch (error) {
        return res.status(500).json({ state: "getting service Provider error", message: error.message });
    }
};

const loginServiceProvider = async (req,res) => {
  const {email , password} = req.body;
  try {
    const serviceProvider = await ServiceProvider.findOne({email : email});
    if(!serviceProvider){
      return res.status(404).json({message : "service provider not found"});
    }
    const validPassword = serviceProvider.password == password;
    if(!validPassword){
      return res.status(401).json({message : "not valid password"});
    }
    return res.status(200).json({message : "logged in successfully", serviceProvider : serviceProvider });
  } catch (error) {
    return res.status(500).json({message : "internal server error during login"});
  }

}

module.exports = {getAllServiceProviders , addServiceProvider , loginServiceProvider};