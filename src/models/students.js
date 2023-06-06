const mongoose = require('mongoose');
const validatior = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email ID already exist'],
        validate(value){
            if (!validatior.isEmail(value)){
                throw new Error('Email ID is not valid')
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

// Creating a new Collection
const Student = mongoose.model('Student', studentSchema)

module.exports = Student