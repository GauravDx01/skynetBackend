const user = require('../Models/nonVerify')

exports.nonVerified = async (req , res) =>{
    const {entryType ,purposeType , houseDetails , adharImg ,userPhoto } = req.body;
    try {
        const result = await user.create({entryType ,purposeType , houseDetails , adharImg ,userPhoto})  

        return res.status(201).json({
            success : true , 
            msg : "Register successfully" , 
            details : result
        })
    } catch (error) {
       res.status(409).json({error: true , msg : "Register unsuccessfull"}) 
    }
}


