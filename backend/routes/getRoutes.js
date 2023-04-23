const express = require('express');
const router = express.Router();
const { getGoal, setGoal, updateGoal, deleteGoal } = require('../controllers/getController');
const protect = require('../middlewares/authmiddleware');

// we can use Router.route method to optimize our code
router.route('/').get(protect, getGoal).post(protect, setGoal);
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal);

//@ getGoal
// router.get('/', getGoal)

//@ setGoal
// router.post('/', setGoal)

//@ updateGoal
// router.put('/:id', updateGoal)

//@ deleteGoal
// router.delete('/:id', deleteGoal)

module.exports = router;