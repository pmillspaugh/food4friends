/* eslint-disable indent */
const db = require('../models/userModels');

const userController = {};

userController.loginOrCreateUser = async (req, res, next) => {
  console.log('a new Post request was received', req.body);
  const { name, auth_token, email } = req.body;
  try {
    if (!auth_token || auth_token.length === 0)
      throw new Error('No auth token was provided');
    const existsSql = `SELECT a._id as userId, a.name, a.user_auth_token as auth_token FROM users as a WHERE user_auth_token = '${auth_token}'`;
    const results = await db.query(existsSql);
    if (results.rows.length === 0) {
      //user does not exist
      const insertSql = `INSERT INTO users (name, user_auth_token) VALUES ('${name}', '${auth_token}')`;
      const response = await db.query(insertSql);

      const getUserIdSql = `SELECT _id as userId FROM users WHERE user_auth_token = '${auth_token}'`;
      const getUserIdResults = await db.query(getUserIdSql);
      if (!getUserIdResults || getUserIdResults.rows.length === 0)
        throw new Error('User was not inserted properly');
      const userId = getUserIdResults.rows[0].userId;
      res.locals.user = { name, auth_token, userId };
    }

    res.locals.user = results.rows[0];
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error in userController.loginOrCreateUser',
      message: {
        err: `userController.loginOrCreateUser: ERROR: ${err}`,
      },
    });
  }
};

userController.addPost = async (req, res, next) => {
  try {
    //[category, content, date, creator_id]
    const dataArray = [
      'brazilian',
      'all you can eat with every cut you can imagine!',
      new Date(),
      2,
    ];
    res.locals.post = await db.query(
      'INSERT INTO public.posts (category, content, date, creator_id) VALUES ($1, $2, $3, $4)',
      dataArray
    );
    return next();
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

//for a logged in user ID, return all posts of users that they follow
userController.getFeed = async (req, res, next) => {
  const { auth_token } = req.body;
  const sql = `SELECT * from posts as a 
	inner join followers as b on a.creator_id = b.user_id
	inner join users as c on b.follower_id = c._id
	WHERE c.user_auth_token = '${auth_token}'`;
  try {
    //querying for all user_ids that have this follower_id
    if (!auth_token || auth_token.length === 0)
      throw new Error('No auth token was provided');
    const results = await db.query(sql);

    if (results.rows.length === 0)
      throw new Error('No results from Posts table');
    res.locals.followedPosts = results.rows;
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error in userController.getUser',
      message: {
        err: `userController.getUser: ERROR:${err}`,
      },
    });
  }
};

userController.searchUsers = async (req, res, next) => {
  const { name } = req.body;
  const sql = `select users._id as userId, users.name, users.user_auth_token from users where lower(name) like '%${name.toLowerCase()}%'`;
  try {
    if (!name || name.length === 0)
      throw new Error('No search criteria was provided');
    const results = await db.query(sql);
    res.locals.users = results.rows;
    console.log('searchUsers results', results.rows);
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error in userController.findUsers',
      message: {
        err: `userController.findUsers: ERROR:${err}`,
      },
    });
  }
};

//! get username not id
userController.getFollows = async (req, res, next) => {
  try {
    const { userId, followedId } = req.body;
    //follower_id = current user's id
    //querying for all user_ids that have this follower_id
    // const data = [3];

    const sql = `SELECT user_id, follower_id FROM followers WHERE user_id=${followedId} AND follower_id=${userId}`;
    //userId from front end is the follower id in the backend - while followedId in the front end is the userId in the backend
    const results = await db.query(sql);
    res.locals.follows = results.rows;
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Error in userController.getUser',
      message: {
        err: `userController.getUser: ERROR: ${err}`,
      },
    });
  }
};

//! handle duplicate
userController.addFollow = async (req, res, next) => {
  const { userId, followedId } = req.body;
  try {
    if (res.locals.follows && res.locals.follows.length > 0) return next(); //user already follows this person
    //user_id, follower_id
    const sql = `INSERT INTO public.followers (user_id, follower_id) VALUES(${followedId}, ${userId})`;
    const results = await db.query(sql);
    return next();
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

// userController.likePost = async (req, res, next) => {
// 	try {
// 	} catch (err) {
// 		console.log(err);
// 		return next({
// 			log: 'Error in userController.getUser',
// 			message: {
// 				err: 'userController.getUser: ERROR: failed to find user',
// 			},
// 		});
// 	}
// };

// userController.deleteUser = async (req, res, next) => {};

// userController.unFavorite = async (req, res, next) => {};

// userController.deletePost = async (req, res, next) => {};

module.exports = userController;
