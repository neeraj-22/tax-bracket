//User Schema for the project

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        minLength:3,
        maxLength : 24,
        required:true
    },
    DOB:{
        type: String,
        required: true,
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("User", userSchema) 