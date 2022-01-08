const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const triviaSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
            unique: false,
        },
        question: {
            type: String,
            required: true,
            unique: true,
        },
        answer: {
            type: String,
            required: true,
        },
        resource: {
            type: String,
            required: false,
        },

        hint: {
            type: String,
            require: false,
        },
    },
    {
        timestamps: true,
    }
);

const Trivia = mongoose.model("Trivia", triviaSchema);

module.exports = Trivia;
