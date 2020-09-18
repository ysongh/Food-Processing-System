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
    workers: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            amount: {
                type: Number,
                default: 0
            },
            name: {
                type: String
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Task", TaskSchema);