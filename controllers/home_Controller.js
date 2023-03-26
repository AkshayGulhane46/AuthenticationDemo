
const Interview = require('../models/interview');
const Student = require('../models/student');
const User = require('../models/user');

let user = User.find({});
let student = Student.find({});

module.exports.home = async function(req, res){
                return res.render('home',{
                    title:'Placement Cell',

                    
                })
}


