const asyncHandler = require('express-async-handler'); // imported express async hanlder, by using that we don't need to return anything in json and also to avoid try catch handling and also .then .then thing
// const User = require('../models/userModel');

// @ user Registration 
// @ public
// @ route  POST /api/goals
const userRegister = asyncHandler(async (req, res) => {
        res.status(200).json('user registered success is 201');
})

// @ user login 
// @ public
// @ route  POST /api/users/login
const userLogin = asyncHandler(async (req, res) => {
    res.status(200).json('user Logged IN');
})
// @ Get GOals 
// @ Private
// @ route  GET /api/users/me
const meGoals = asyncHandler(async (req, res) => {
    res.status(200).json('goals got');
})
module.exports ={
    userRegister,
    userLogin,
    meGoals,
}