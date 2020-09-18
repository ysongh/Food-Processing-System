const mongoose = require("mongoose");

const GLNSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, "Code is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }
});

module.exports = mongoose.model("GLN", GLNSchema);