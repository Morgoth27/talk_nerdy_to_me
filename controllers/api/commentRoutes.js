const router = require('express').Router();
const { Comment } = require('../../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.findAll({});
        res
            .status(200)
            .json(comments);
    } catch (err) {
        res
            .status(500)
            .json(err);
    }
});

module.exports = router;