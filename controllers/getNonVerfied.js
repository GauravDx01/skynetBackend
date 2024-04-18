const user = require('../Models/nonVerify')


exports.getNonVerifiedData = async (req, res) => {
    try {
      // Fetch all non-verified data from the database
      const nonVerifiedData = await user.find();
  
      res.status(200).json({
        success: true,
        data: nonVerifiedData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  };