const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student_Controller');

router.post('/create',studentController.create);

module.exports = router;