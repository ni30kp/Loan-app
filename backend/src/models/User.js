const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    applicationData: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

// Export the user model
module.exports = mongoose.model("User", userSchema);
