const router = require("express").Router();
const User = require("../models/User");

router.post("/initialise", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findOne({ email: email });
    if (user === null) {
      const newUser = new User({ name, email });
      const response = await newUser.save();
      res.status(200).json(response);
    }
    res.status(200).json("user already there");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
