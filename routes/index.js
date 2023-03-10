const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_Controller');


console.log('router loaded');
router.get('/',homeController.home);
router.use('/students', require('./students'));
router.use('/interview', require('./interview'));
router.use('/interview_detail/:id',require('./interview_details'));
module.exports = router;

