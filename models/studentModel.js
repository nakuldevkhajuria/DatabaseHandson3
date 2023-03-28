const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    age: Number,
    email:String,
    mobile:String,
    created:Date
})

const StudentModel = mongoose.model("information",StudentSchema);

module.exports = StudentModel