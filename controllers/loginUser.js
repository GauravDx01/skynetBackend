const User = require('../Models/signUpSchema');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const userData = await User.findOne({ username });

        // If user not found, send an error response with a specific message
        if (!userData) {
            return res.status(401).json({
                success: false,
                msg: "User not found" // Specify the message for user not found
            });
        }

        // If passwords do not match, send an error response
        if (userData.password !== password) {
            return res.status(401).json({
                success: false,
                msg: "Invalid password" // Specify the message for invalid password
            });
        }

        // If passwords match, send a success response with user data
        return res.status(200).json({
            success: true,
            msg: "Login successful",
            userData: userData
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        });
    }
};
