const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    company_name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    students:
    [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:'Student'
        }
    ]
    ,
    placed:{
        type:Boolean,
        required:false
    }
},{
    timestamps:true
})

const Interview = mongoose.model('Interview',interviewSchema);
module.exports = Interview;
