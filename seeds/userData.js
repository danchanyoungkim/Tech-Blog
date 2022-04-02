const { User } = require('../models');

const userData = [
    {
        username: "Carter",
        email: "carter@email.com",
        password: "password",
    },
    {
        username: "Kat",
        email: "kat@email.com",
        password: "password",
    },
    {
        username: "Emile",
        email: "emile@email.com",
        password: "password",
    },
    {
        username: "Jorge",
        email: "jorge@email.com",
        password: "password",
    },
    {
        username: "Jun",
        email: "jun@email.com",
        password: "password",
    },
    {
        username: "Unknown",
        email: "unknown@email.com",
        password: "password",
    },
];

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;