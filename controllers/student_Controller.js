const Student = require('../models/student');
const Company = require('../models/interview');

module.exports.create = function(req,res){
    const newStudent = new Student({
        name : req.body.name,
        batch :req.body.batch,
        college : req.body.college,
        dsa : req.body.dsa,
        webd : req.body.webd,
        react : req.body.react,
    })

    newStudent.save().then(()=>{
        res.redirect('back');
    }).catch((err) =>{
        console.log(err);
    })
}


module.exports.placed = async function(req,res){
    console.log("inside placed");
    console.log("Studnet who is placed is" , req.query.studentId);
    let student = await Student.findById(req.query.studentId);
    let company = await Company.findById(req.query.comp_id);
    
    student.placed = true;
    student.student_placed = company.company_name;
    student.save();
    res.redirect('back');
}