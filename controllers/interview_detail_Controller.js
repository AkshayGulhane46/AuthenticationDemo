const Interview = require('../models/interview');
const path = require('path');
const Student = require('../models/student');

module.exports.interview_detail = async function(req, res){
    //let id = Interview.findById(req.query.id);
    //console.log(req.query.id);
    let interview = await Interview.findById(req.query.id);
    let students = await Student.find({});
    let interview_students = interview.students;
    let studentss = await Interview.find({}).populate('students')
    let studentsss = studentss.students;

    console.log(studentsss);


   // console.log(interview_students);
    //console.log(students);
    //console.log("company id is",interview);
    return res.render('interview-detail',{
        company_name : interview.company_name,
        company_id : interview._id,
        student_detail:students,
        interview_student : studentss
    }
    );
}




