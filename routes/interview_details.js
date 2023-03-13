const express = require('express');
const router = express.Router();

const interview_detail_controller = require('../controllers/interview_detail_Controller');


router.get('/',interview_detail_controller.interview_detail);
//router.post('/create',interviewController.create);
router.post('/add_student',interview_detail_controller.add_student);
module.exports = router;