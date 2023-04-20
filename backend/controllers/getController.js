// imported express async hanlder, by using that we don't need to return anything in json and also to avoid try catch handling and also .then .then thing
const asyncHandler = require('express-async-handler')

// gettin all goals with this function passed to the second argument of route and export it from here.
const getGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all goals"})
})

// setting goals with this function passed to the second argument of route and export it from here.
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400);
        //we can use built in throw new error functionality, we can also change the Error express function 
        throw new Error(' please add text field');
    }
    res.status(200).json({ message: "goal setting"})
})
// updating the specific goal with id with this function passed to the second argument of route and export it from here.
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update the goal with the is equals to ${req.params.id}`})
})
// gettin all goals with this function passed to the second argument of route and export it from here.
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete the goal with the is equals to ${req.params.id}`})
})

module.exports = {
    getGoal, 
    setGoal,
    updateGoal,
    deleteGoal,
}