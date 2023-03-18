const express = require('express');
const router = express.Router();

const interviewController = require('../controllers/interview_Controller');


router.get('/',interviewController.interview);
router.post('/create',interviewController.create);
router.post('/addStudent',interviewController.addStudent);


module.exports = router;