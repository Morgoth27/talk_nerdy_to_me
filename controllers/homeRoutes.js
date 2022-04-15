const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const auth = require('../utils/auth');

// takes user to the homepage
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
        attributes: ['id', 'post_body','title','user_id','created_at'],
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
          }
        ],
    });

  const allPosts = posts.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      allPosts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts', auth, async (req, res) => {
  try {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  const allPosts = posts.map((post) => post.get({ plain: true }));

  res.render('create-post', { 
    allPosts, 
    logged_in: req.session.logged_in 
  });
} catch (err) {
  res.status(500).json(err);
}
});


router.get('/posts/:id', auth, async (req, res) => {
  try {
    const posts = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const comments = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const allPosts = posts.get({ plain: true });
    const allComments = comments.map((comment) => comment.get({ plain: true }));
    console.log(post)
    res.render('edit-post', {
      allPosts,
      allComments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id/comments', async (req, res) => {
  try {
    const posts = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const comments = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const allPosts = posts.get({ plain: true });
    const allComments = comments.map((comment) => comment.get({ plain: true }));
    res.render('comments', {
      allPosts,
      allComments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/profile', auth, async (req, res) => {
  try {
    const users = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = users.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get("/register", (req, res) => {
  if (req.session.logged_in) {
      res.redirect("/");
      return;
  }
  res.render("register");
});

module.exports = router;