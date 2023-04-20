const express = require('express');
const router = express.Router();
const {getGoal, setGoal, updateGoal, deleteGoal} = require('../controllers/getController');

// we can use Router.route method to optimize our code
router.route('/').get(getGoal).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);

//@ getGoal
// router.get('/', getGoal)

//@ setGoal
// router.post('/', setGoal)

//@ updateGoal
// router.put('/:id', updateGoal)

//@ deleteGoal
// router.delete('/:id', deleteGoal)

module.exports = router;