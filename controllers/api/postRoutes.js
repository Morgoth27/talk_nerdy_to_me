const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
        include: [
            { model: Comment }
        ]
    });
        res
            .status(200)
            .json(posts);
  } catch (err) {
        res
            .status(500)
            .json(err);
  }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const posts = await Post.update(req.body, {
            where: {
                id: req.params.id, user_id: req.session.user_id
            },
        });
        res
            .status(200)
            .json(posts);
    } catch (err) {
        res
            .status(400)
            .json(err);
    }
});

router.post('/', auth, async (req, res) => {
    try{
        const newPost = await Post.create({
            ...req.body, user_id: req.session.user_id
        })
        res
            .status(200)
            .json(newPost);
    } catch (err) {
        res
            .status(400)
            .json(err);
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
      const posts = await Post.destroy({
        where: {
          id: req.params.id, user_id: req.session.user_id
        },
      });
      if (!posts) {
        res
            .status(404)
            .json({ message: 'Post not found.' });
        return;
      }
        res
            .status(200)
            .json(posts);
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
  });
  
  module.exports = router;