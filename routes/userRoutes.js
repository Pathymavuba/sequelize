const express = require('express');
const router = express.Router();
const userControllers = require('../controlers/userControllers');

router.get('/users', userControllers.getAllUsers);
router.get('/user/:id', userControllers.getUser);
router.post('/user', userControllers.createUser);
router.put('/user/:id', userControllers.modifyUser);
router.delete('/user/:id', userControllers.deleteUser);


module.exports = router