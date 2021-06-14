const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/', (req, res) => {
// 	return res.status(200).json();
// });

router.get('/login', userController.loginOrCreateUser, (req, res) =>
	res.status(200).json(res.locals.user)
);

router.post('/post', userController.addPost, (req, res) =>
	res.status(200).json(res.locals.post)
);

router.get('/getFeed', userController.getFeed, (req, res) =>
	res.status(200).json(res.locals.followedPosts)
);

router.post('/searchUsers', userController.searchUsers, (req, res) =>
	res.status(200).json(res.locals.users)
);

router.post(
	'/followSomeone',
	userController.getFollows,
	userController.addFollow,
	(req, res) => res.status(200).json(res.locals.follows)
);

//followed posts
//only personal posts

module.exports = router;
