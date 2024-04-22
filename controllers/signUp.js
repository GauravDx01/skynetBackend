const User = require('../Models/signUpSchema');

exports.signUp = async (req, res) => {
    const { username, userPhoneNo, password } = req.body;

    try {
        // Check if the username already exists in the database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "Username already exists"
            });
        }

        // Create a new user if the username is unique
        const newUser = await User.create({ username, userPhoneNo, password });

        return res.status(201).json({
            success: true,
            msg: "Data added!",
            userData: newUser
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        });
    }
};
