const Interview = require('../models/interview');
const path = require('path');
const Student = require('../models/student');

module.exports.interview_detail = async function(req, res){
    //let id = Interview.findById(req.query.id);
    //console.log(req.query.id);
    let interview = await Interview.findById(req.query.id);
    let students = await Student.find({});
    //console.log(students);
    //console.log("company id is",interview);
    return res.render('interview-detail',{
        company_name : interview.company_name,
        student_detail:students
    }
    );
}


module.exports.add_student = async function(req,res){
    let interview = await Interview.findById(req.query.id);
    console.log("inside add student");
    res.redirect('back');
}



  
