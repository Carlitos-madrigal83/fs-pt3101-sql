const express = require('express');
const { DEV_PORT } = require('./constants');
const errors = require('./errors');
const app = express();

const main = require('./controllers');

app.use('/', main) // Ruta principal

app.use((req, res, next) => {
    next(errors[404]);
});

app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    });
});

app.listen(process.env.PORT || DEV_PORT, () => {
    console.info(`> listening at: ${process.env.PORT || DEV_PORT}`);
});