
const Interview = require('../models/interview');
const Student = require('../models/student');
const User = require('../models/user');


module.exports.home = async function(req, res){

    if(req.cookies.user_id){
        User.findById(req.cookies.user_id).
        then(async function(user){
            if(user){
                let students = await Student.find({}).
                sort('-createdAt');
                return res.render('home',{
                    title:'hello',
                    students: students
                })
            }
        })
    }else{
        res.redirect('/users/sign-in');
    }

    
    
    
}
  
