const sequelize = require('../config/config.js');
const commentData = require('./commentData.json');
const postData = require('./postData.json');
const userData = require('./userData.json');
const { User, Post, Comment } = require('../models')

const seeds = async() => {
    await sequelize.sync({ force: true });
    
    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });

    const posts = await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seeds();