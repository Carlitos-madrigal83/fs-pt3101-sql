const router = require('express').Router();

module.exports = () => {
    const getAll = require('./get-all')

    router.get('/users', getAll)

    return router
};