const { Post } = require('../models');

const postData = [
    {
        title: "Carter",
        body: "You're on your own, Noble... Carter out.",
        userId: 1,
    },
    {
        title: "Kat",
        body: "When does he get off calling a demolition op Priority One-",
        userId: 2,
    },
    {
        title: "Jun",
        body: "I'll do what's necessary, sir...good luck.",
        userId: 3,
    },
    {
        title: "Emile",
        body: "I'm ready! How 'bout you!?",
        userId: 4,
    },
    {
        title: "Jorge",
        body: "Tell 'em to make it count.",
        userId: 5,
    },
    {
        title: "Six",
        body: "...",
        userId: 6,
    },
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;