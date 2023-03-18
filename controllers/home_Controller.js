
const Interview = require('../models/interview');
const Student = require('../models/student');

module.exports.home = async function(req, res){

    let students = await Student.find({}).
    sort('-createdAt');
    return res.render('home',{
        title:'hello',
        students: students
    })
}
  
