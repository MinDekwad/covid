const express = require('express');
const route = express.Router();
const memberController = require('../controller/member');

route.post('/register', memberController.memberCreate); //crete
route.get('/read', memberController.memberRead); //read all
route.get('/read/:id', memberController.memberReadByID); //read by id
route.put('/update/:id', memberController.memberUpdateByID); // update by id
route.delete('/delete/:id', memberController.memberDeleteByID); // delete by id

module.exports = route;