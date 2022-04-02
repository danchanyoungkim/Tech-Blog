const sequelize = require('../config/config.js');
const commentData = require('./commentData');
const postData = require('./postData');
const userData = require('./userData');

const seeds = async() => {
    await sequelize.sync({ force: true });
    await commentData();
    await postData();
    await userData();

    process.exit(0);
};

seeds();