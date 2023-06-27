const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        //@ user id
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            required: [true, 'please add the field'],
        }
    },
    {
        timestamps: true,
    }
)
const Goal = mongoose.models?.goals || mongoose.model('goals', goalSchema);
module.exports = Goal;