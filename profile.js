const mongoose = require('mongoose');

const Schema = mongoose.Schema


const ProfileSchema = new Schema({
    user_id: String,
    address: String,
    phone: String
})



const profile = mongoose.model('profile', ProfileSchema)

module.exports = profile


