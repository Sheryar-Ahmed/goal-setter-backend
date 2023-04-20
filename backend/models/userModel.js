const mongoose = require('mongoose');
// for email verification
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add your name'],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'password is required to continue']
    }
},
    {
        timestamps: true,
    }
)

const User = mongoose.models?.User || mongoose.model('User', userSchema);

module.exports = User;