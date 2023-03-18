const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student_Controller');

router.post('/create',studentController.create);

router.post('/placed',studentController.placed);

module.exports = router;