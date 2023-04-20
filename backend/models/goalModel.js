const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
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