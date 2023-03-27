const express = require('express');
const app = express();
const router = express.Router();
const homeController = require('../controllers/home_Controller');
const fs = require('fs');
const mdq = require('mongo-date-query');
const path = require('path');

console.log('router loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
module.exports = router;

