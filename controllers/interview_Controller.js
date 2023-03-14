const Interview = require('../models/interview');
const path = require('path');
const Student = require('../models/student');

module.exports.interview = async function(req, res){
    let students = await Student.find({})
    let interviews = await Interview.find({})

    return res.render('interview',{
        students:students,
        interviews:interviews
    });
}
  
module.exports.create = function(req,res){
    const newInterview = new Interview({
        company_name: req.body.company_name,
        date:req.body.date,
    })

    newInterview.save().then(()=>{
        res.redirect('back');
    }).catch((err) =>{
        console.log(err);
    })
}


module.exports.addStudent = async function(req,res){
    console.log("inside contrommer")
    console.log("Student id is==" ,  req.body.studentList);
    console.log("company id is==" , req.query.compname);
    let interview = await Interview.findById(req.query.compname);
    console.log(interview._id);
    interview.students.push(req.body.studentList);
    interview.save();
  

    let studentUpdate = await Student.findById(req.body.studentList);
    studentUpdate.interviews.push(req.query.compname);
    studentUpdate.save();

    res.redirect('back');
}


