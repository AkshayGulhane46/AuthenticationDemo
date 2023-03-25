const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    dsa:{
        type:Number,
        required:true
    },
    webd:{
        type:Number,
        required:true
    },

    react:{
        type:Number,
        required:true
    },
    placed:{
        type:Boolean,
        required:false
    },
    interviews:
    [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:'Interview'
        }
    ],
    companies:
    [
        {
            type:String,
            required : false
        }
    ],
    student_placed:{
        type:String,
        required : false
    }
},{
    timestamps:true
})

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;
