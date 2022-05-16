const router = require('express').Router();

module.exports = () => {
    const usersControllers = require('./users')

    router.use('/users', usersControllers)

    return router;
};