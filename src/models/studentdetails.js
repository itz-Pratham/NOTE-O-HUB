const mongoose= require('mongoose');
const studentSchema =new mongoose.Schema({
    DisplayName:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true,
    },
    Status:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
    ConfirmPassword:{
        type:String,
        required:true,
    },
    College:{
        type:String,
        required:true,
    },
    PassingYear:{
        type:Number,
        required:true,
    },
    Branch:{
        type:String,
        required:true,
    },
})

const Register=new mongoose.model("Student",studentSchema);
module.exports=Register;