const express = require('express');
const logger = require('morgan');
const bParser = require('body-parser');
require('./database/connection')
// This will be our application entry. We'll setup our server here.
const config = require('./config/config')
const environ = config[process.env.NODE_ENV];
const http = require('http');
const { createAssociation } = require('./database/associations');
const { defineModels } = require('./database/defineModels');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));

// definimos todos los modelos en sequealize
defineModels();
// Agrega todas las asociones
createAssociation();


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bParser.json());
app.use(bParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Request:', req.method, req.originalUrl, ip);

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}, bParser.json());

app.options('*', (req, res) => {
    // allowed XHR methods  
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
});
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

// require roots
app.use(require('./routes/routesUsuario'));
app.use(require('./routes/routesMaterial'));
app.use(require('./routes/routesPrestamo'));
app.use(require('./routes/routesSalaEstudio'));
app.use(require('./routes/routesReserva'));




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
