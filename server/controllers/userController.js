const { ExternalModule } = require('webpack');
const db = require('../models/userModels');

const userController = {};

userController.verifyUser = async (req, res, next) => {
	console.log('hi');
	const sql = 'SELECT users.* FROM users WHERE user_auth_token = $1';
	try {
		const token = ['09fhj!'];
		const results = await db.query(sql, token);
		res.locals.user = results.rows;
		console.log(results);
		return next();
	} catch (err) {
		console.log(err);
		return next({
			log: 'Error in userController.verifyUser',
			message: {
				err: 'userController.verifyUser: ERROR: failed to find user',
			},
		});
	}
};

userController.createUser = async (req, res, next) => {
	try {
	} catch (err) {
		console.log(err);
		return next({
			log: 'Error in userController.getUser',
			message: {
				err: 'userController.getUser: ERROR: failed to find user',
			},
		});
	}
};

userController.addFavorite = async (req, res, next) => {
	try {
	} catch (err) {
		console.log(err);
		return next({
			log: 'Error in userController.getUser',
			message: {
				err: 'userController.getUser: ERROR: failed to find user',
			},
		});
	}
};

userController.getFavorites = async (req, res, next) => {
	try {
	} catch (err) {
		console.log(err);
		return next({
			log: 'Error in userController.getUser',
			message: {
				err: 'userController.getUser: ERROR: failed to find user',
			},
		});
	}
};

userController.addPost = async (req, res, next) => {
	try {
	} catch (err) {
		console.log(err);
		return next({
			log: 'Error in userController.getUser',
			message: {
				err: 'userController.getUser: ERROR: failed to find user',
			},
		});
	}
};

userController.likePost = async (req, res, next) => {
	try {
	} catch (err) {
		console.log(err);
		return next({
			log: 'Error in userController.getUser',
			message: {
				err: 'userController.getUser: ERROR: failed to find user',
			},
		});
	}
};

userController.deleteUser = async (req, res, next) => {};

userController.unFavorite = async (req, res, next) => {};

userController.deletePost = async (req, res, next) => {};

module.exports = userController;
