const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        address: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        website: { type: String, required: true },
        logo: { type: String, required: true },
        description: { type: String, required: true },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("School", SchoolSchema);
