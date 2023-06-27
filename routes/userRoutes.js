const express = require('express');
const { userRegister, userLogin, meGoals } = require('../controllers/userController');
const protect = require('../middlewares/authmiddleware');

const router = express.Router();

router.route('/register').post(userRegister);
router.route('/login').post(userLogin);
//protect the route with middleware for authorization token.
router.route('/mygoals').get(protect, meGoals);



module.exports = router;