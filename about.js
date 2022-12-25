const mongoose = require('mongoose');

const Schema = mongoose.Schema


const AboutSchema = new Schema({
    user_id: String,
    address: String,
    phone: String
})



const about = mongoose.model('about', AboutSchema)

module.exports = about


