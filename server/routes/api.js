const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/', (req, res) => {
// 	return res.status(200).json();
// });

router.get('/login', userController.verifyUser, (req, res) => {
	console.log('login');
	return res.sendStatus(200);
});

module.exports = router;
