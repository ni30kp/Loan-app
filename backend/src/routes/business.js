const router = require("express").Router();

const Business = require("../models/Business");
const User = require("../models/User");

// creates new business
router.post("/new", async (req, res) => {
  try {
    const { userData } = req.body;
    // check for user
    let user = await User.findOne({ email: userData.email });

    // initialise new user if they don't exist
    if (user === null) {
      const newUser = new User(userData);
      user = await newUser.save();
    }

    const businessRes = new Business(req.body);
    const response = await businessRes.save();
    await user.updateOne({
      $push: { applicationData: response._id },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// all business and application data based on useremail
router.get("/:userEmail", async (req, res) => {
  try {
    const data = await Business.find({
      "userData.email": req.params.userEmail,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

module.exports = router;
