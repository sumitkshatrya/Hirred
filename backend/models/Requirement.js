const mongoose = require("mongoose");

const RequirementSchema = new mongoose.Schema(
  {
    eventName: String,
    eventType: String,
    date: String,
    time: String,
    location: String,
    venue: String,

    hireType: {
      type: String,
      enum: ["planner", "performer", "crew"],
      required: true,
    },

    details: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Requirement", RequirementSchema);
