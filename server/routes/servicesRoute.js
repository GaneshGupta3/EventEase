
const express = require('express');
const router = express.Router();
const {getServices} = require("../controllers/serviceController.js")

router.get('/getAllServices', getServices);

module.exports = router;