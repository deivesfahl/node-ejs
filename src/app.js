require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/', require('./routes/site'));
app.use('/about', require('./routes/site'));
app.use('/contact', require('./routes/site'));

app.listen(process.env.PORT || 3000);
