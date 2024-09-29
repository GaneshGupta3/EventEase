const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/getUsers', userController.getUsers);

router.post('/registerUser',userController.addUser);

router.post('/userExists',userController.userExists);

module.exports = router;