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
    gtin: {
        type: String,
        required: [true, "GTIN is required"],
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Task", TaskSchema);