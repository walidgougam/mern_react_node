const express = require('express');
const router = express.Router();
let User = require('../models/user');

//@routes : localhost5000/users
router.route('/').get((req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
});

//@routes : localhost5000/users/add
router.route('/add').post((req, res, next) => {
  const username = req.body.username;
  console.log(username, 'username body');
  const newUser = new User({username});

  newUser
    .save()
    .then(() => res.json('user added'))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
