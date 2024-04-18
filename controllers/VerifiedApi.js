const user = require('../Models/Verified')

exports.verified = async (req , res)=>{
    const {maidName} = req.body
    try {
        const existingUser = await user.findOne({ maidName });

        if (existingUser) {
            // If the maid name already exists, return a response indicating that the data is already added
            return res.status(400).json({
                error: true,
                msg: "Data already exists"
            });
        }

        const result = await user.create({maidName})
        return res.status(201).json({
            details : result,
            error: false,
            msg : "Data added successfully"


        })
    } catch (error) {
        return res.status(401).json({
            error: true , 
            msg :" Data not added"
        })
    }
}
