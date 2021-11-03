const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('./database/connection')
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));
const port = parseInt(process.env.PORT, 10) || 4000;
app.set('port', port);
const server = http.createServer(app);
(async () => {
    try {
        await sequelize.authenticate();
        console.log(`DB connection has been established successfully to ${environ.database} on ${environ.host}`);
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})();
server.listen(port);
module.exports = app;
