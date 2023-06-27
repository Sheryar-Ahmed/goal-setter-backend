const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]; // split the bearer and token into two different arrays 0 and 1 indexed
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // get user from the taken and its details with - password
            req.user = await User.findById(decoded.id).select('-password');
            //move if any next middleware
            next();
        } catch (err) {
            console.log(err)
            re.status(401)
            throw new Error("Not authorized")
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }

});


module.exports = protect;