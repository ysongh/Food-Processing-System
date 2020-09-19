const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    type: {
        type: String
    },
    address: {
        type: String
    },
    isNewTask: {
        type: Boolean,
        default: false
    },
    isOngoingTask: {
        type: Boolean,
        default: false
    },
    isCompletedTask: {
        type: Boolean,
        default: false
    },
    tasks: [
        {
            taskId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Task'
            },
            status: {
                type: String,
                default: 'New'
            }
        }
    ]
});

module.exports = mongoose.model("User", UserSchema);