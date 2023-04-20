const asyncHandler = require('express-async-handler'); // imported express async hanlder, by using that we don't need to return anything in json and also to avoid try catch handling and also .then .then thing
const Goal = require('../models/goalModel');

// @ get Goals 
// @ private
// @ route  GET /api/goals
const getGoal = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    if (goals) {
        res.status(200).json(goals);
    }
})
// @ Goal set 
// @ private
// @ route POST api/goals 
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        //we can use built in throw new error functionality, we can also change the Error express function 
        throw new Error(' please add text field');
    }
    const createdGoal = await Goal.create({
        text: req.body.text,
    })
    res.status(201).json(createdGoal)
})
// @ update Goal 
// @ private
// @ route POST api/goals/:id 
const updateGoal = asyncHandler(async (req, res) => {
    if(!req.params.id){
        res.status(400)
        throw new Error('Goal not Found!')
    }
    const Updated = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })
    res.status(200).json(Updated)
})
// @ Delete Goal 
// @ private
// @ route POST api/goals/:id 
const deleteGoal = asyncHandler(async (req, res) => {
    if(!req.params.id){
        res.status(404);
        throw new Error(`Goul not found with th id ${req.params.id}`);
    }
    await Goal.findByIdAndRemove(req.params.id);
    res.status(200).json(req.params.id)
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}