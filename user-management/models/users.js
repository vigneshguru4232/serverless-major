const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required : [ true,"Please add Username" ]
    },
    email:{
        type : String,
        required:true,
        unique:true,
        validate:[ validator.isEmail, "Entered email is invalid" ]
    },
    id:{
        type : Number,
        required:true,
        unique:true,
    }

})


module.exports = mongoose.model("User", UserSchema);