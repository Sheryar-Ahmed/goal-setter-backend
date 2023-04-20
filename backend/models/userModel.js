const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: string,
        required: [true, 'please add your name'],
    },
    email: {
        type: email,
        required: [true, 'please add your email'],
        unique: [true, 'Email must be unique']
    },
    password: {
        type: string,
        required: [true, 'password is required to continue']
    }
},
    {
        timestamps: true,
    }
)

const User = mongoose.models?.user || mongoose.model('User', userSchema);

module.exports = User;