const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Wow, OK. Whatever you say.',
        date: '03/24/2022',
        user_id: '4',
        post_id: '1',
    },
    {
        comment_text: 'Not sure how I feel about this tbh.',
        date: '02/21/2022',
        user_id: '2',
        post_id: '2',
    },
    {
        comment_text: 'What is the meaning of life?',
        date: '04/01/2022',
        user_id: '2',
        post_id: '3',
    },
    {
        comment_text: 'Awesome, thank you for your insight!',
        date: '01/02/2022',
        user_id: '3',
        post_id: '1',
    },
    {
        comment_text: 'Hm. Interesting take.',
        date: '04/01/2022',
        user_id: '1',
        post_id: '4',
    },
    {
        comment_text: "I couldn't agree LESS! SENDING YOU HATE MAIL RIGHT NOW.",
        date: '04/01/2022',
        user_id: '2',
        post_id: '1',
    },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;