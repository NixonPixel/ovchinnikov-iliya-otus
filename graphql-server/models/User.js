const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userShema)