const sequelize = require('../config/config.js');
const commentData = require('./commentData.json');
const postData = require('./postData.json');
const userData = require('./userData.json');
const { User, Post, Comment } = require('../models')

const seeds = async() => {
    await sequelize.sync({ force: true });
    await commentData();
    await postData();
    await userData();

    process.exit(0);
};

seeds();