const express = require('express');
const route = express.Router();
const userController = require('../controller/usercontroller');

route.post('/createUser',userController.createUser);
route.get('/getUsers',userController.getUsers);
route.get('/getUserById/:id',userController.getUserById);
route.put('/updateUser/:id',userController.updateUsers);
route.delete('/deleteUser/:id',userController.deleteUser);

module.exports = route;