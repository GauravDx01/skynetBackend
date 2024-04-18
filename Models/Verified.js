const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    maidName : {
        type : String ,
        required : true ,
        trim : true
    } , 
   
})
module.exports = mongoose.model("verifiedusers" , userSchema)