const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    studentNumber: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Student", StudentSchema);
