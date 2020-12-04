const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    concepts: [{
        type: String,
        ref: 'Concept'
    }]

}, {timestamps: true});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;