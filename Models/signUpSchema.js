const mongoose = require('mongoose')
const signUpSchema = new mongoose.Schema({
    username : {
        required : true,
        trim : true , 
        type : String
    },
    userPhoneNo : {
        required : true,
        trim : true , 
        type : Number
    },
    password : {
        required : true,
        trim : true , 
        type : String
    }
})
module.exports = mongoose.model("signUpUsers" , signUpSchema)