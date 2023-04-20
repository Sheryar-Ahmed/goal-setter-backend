const express = require('express');
const {userRegister, userLogin, meGoals} = require('../controllers/userController');
const router = express.Router();

router.route('/register').post(userRegister);
router.route('/login').post(userLogin);
router.route('/mygoals').post(meGoals);



module.exports = router;