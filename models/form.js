const mongoose = require('mongoose');
const {Schema} = require('mongoose')

const saveFormSchema = new Schema({ 
    text:String,
    topic: String,
})

module.exports = mongoose.model('SaveForm', saveFormSchema)
    