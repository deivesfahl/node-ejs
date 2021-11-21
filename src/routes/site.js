const express = require('express');
const router = express.Router();

const Home = require('../controllers/Home');
const About = require('../controllers/About');
const Contact = require('../controllers/Contact');

router.get('/', Home.index);
router.get('/about', About.index);
router.get('/contact', Contact.index);

module.exports = router;
