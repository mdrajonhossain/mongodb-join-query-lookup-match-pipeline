const mongoose = require('mongoose');

const Schema = mongoose.Schema


const UserSchema = new Schema({
    username: String,
    email: String
})



const usersdata = mongoose.model('usersdata', UserSchema)

module.exports = usersdata