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
        student:req.body.student
    })

    newInterview.save().then(()=>{
        res.redirect('back');
    }).catch((err) =>{
        console.log(err);
    })
}



