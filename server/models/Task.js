const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String
    },
    detail: {
        type: String
    },
    destination: {
        type: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Task", TaskSchema);