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

router.post('/', async (req, res) => {
    try {
        const users = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = users.id;
            req.session.logged_in = true;
            res.status(200).json(users);
        });
    } catch (err) {
    res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const users = await User.findOne({ where: {name: req.body.name} });
        if (!users) {
            res
            .status(400)
            .json({message: 'No such username.'});
            return;
        }
    }
});
    
  
router.post('/logout', (req, res) => {
if (req.session.logged_in) {
    req.session.destroy(() => {
    res.status(204).end();
    });
} else {
    res.status(404).end();
}
});

module.exports = router;