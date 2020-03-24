const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "please add username"],
        unique: true,
        minlength: 1
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema);
module.exports = User