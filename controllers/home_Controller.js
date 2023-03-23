
const Interview = require('../models/interview');
const Student = require('../models/student');
const User = require('../models/user');

let user = User.find({});

module.exports.home = async function(req, res){

    if(req.cookies.user_id){
        User.findById(req.cookies.user_id).
        then(async function(user){
            if(user){
                let students = await Student.find({}).
                sort('-createdAt');
                return res.render('home',{
                    title:'Placement Cell',
                    students: students,
                    user : user
                    
                })
            }
        })
    }else{
        res.redirect('/users/sign-in');
    }  
}
  

