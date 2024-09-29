const ServiceProvider = require('../models/serviceProviderModel.js') 

const fetchAllServiceProviders = async()=>{
    return await ServiceProvider.find({});
};



module.exports = {fetchAllServiceProviders};