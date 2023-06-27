const asyncHandler = require('express-async-handler'); // imported express async hanlder, by using that we don't need to return anything in json and also to avoid try catch handling and also .then .then thing
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const setCorsHeaders = require('../middlewares/corsmiddleware');
// @ user Registration 
// @ public
// @ route  POST /api/goals
const userRegister = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please fill the fields");
    }
    // check if user already exists
    const userExists = await User.findOne({ 'email': email });
    if (userExists) {
        res.status(409);
        throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);  // salt setting
    const hashedPass = await bcrypt.hash(password, salt);     //hased password
    const client = await User.create({      //creating the user in db
        name,
        email,
        password: hashedPass,
    })
    if (client) {
        res.status(201).json({
            _id: client._id,
            name: client.name,
            email: client.email,
            token: generateToken(client._id),
        })
    } else {
        res.status(400);
        throw new Error('Try again.')
    }
})

// @ user login 
// @ public
// @ route  POST /api/users/login
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("Fields can't be empty.")
    }
    //find that user
    const user = await User.findOne({ 'email': email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new error('Invalid Credentials.')
    }
})
// @ Get GOals 
// @ Private
// @ route  GET /api/users/me
const meGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    });
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = {
    userRegister: setCorsHeaders(userRegister),
    userLogin: setCorsHeaders(userLogin),
    meGoals: setCorsHeaders(meGoals),
}