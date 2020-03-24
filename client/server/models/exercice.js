const mongoose = require("mongoose")

const ExerciceSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
})

const Exercice = mongoose.model('exercice', ExerciceSchema)
module.exports = Exercice;