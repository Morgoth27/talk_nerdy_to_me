const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
// const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const users = await User.findAll({
      });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
  });