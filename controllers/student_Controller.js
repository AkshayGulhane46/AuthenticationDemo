const Student = require('../models/student');


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
    res.redirect('back');
}