const express = require('express');
const router = express.Router();
const {getAllServiceProviders , addServiceProvider, loginServiceProvider} = require("../controllers/serviceProviderController.js")

router.get('/getServiceProviders', getAllServiceProviders);

router.post('/registerServiceProvider',addServiceProvider);

router.post('/serviceProviderLogin',loginServiceProvider);

module.exports = router;