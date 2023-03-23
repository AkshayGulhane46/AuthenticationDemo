const Interview = require('../models/interview');
const path = require('path');
const Student = require('../models/student');

module.exports.interview_detail = async function(req, res){
    //let id = Interview.findById(req.query.id);
    //console.log(req.query.id);
    let interview = await Interview.findById(req.query.id);
    let students = await Student.find({});
    let companytitle = interview.company_name;
    let company = await Interview.findById(req.query.id).populate('students').populate({
        path:'students'
    }).populate('students')


    return res.render('interview-detail',{
        company_name : interview.company_name,
        company_id : interview._id,
        student_detail:students,
        interview_student : company.students,
        title:companytitle
  
    }
    );
}


module.exports.placed = async function(req,res){
    console.log('inside placed');
    return res.render('interview-detail',{
        company_name : interview.company_name,
        company_id : interview._id,
        student_detail:students,
        interview_student : company.students
    })
}




