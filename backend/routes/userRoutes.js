//User routes -- through which frontend will interact with backend
const express = require("express");
const router = express.Router();

const { createUser, getAllUsers, findUserTax } = require("../controller/userController.js")

//Auth routes
router.post('/user', createUser) //for creating user
router.get('/users', getAllUsers) //for finding all users
router.get("/user/:id/tax", findUserTax) //Calculating Tax of A User

module.exports = router