const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    entryType : {
        type : String ,
        required : true ,
        trim : true
    } , 
    purposeType : {
        type : String ,
        required : true ,
        trim : true
    },
    houseDetails : {
            type : Object,
            required : true ,
            trim : true
  
    },
    adharImg : {
        type : String ,
        required : true ,
        trim : true

    },
    userPhoto : {
        type : String ,
        required : true ,
        trim : true

    }
})
module.exports = mongoose.model("nonVerify" , userSchema)