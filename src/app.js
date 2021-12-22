const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const routesSite = require('./routes/site');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use('/', routesSite);
app.use('/about', routesSite);
app.use('/contact', routesSite);

module.exports = { app };
