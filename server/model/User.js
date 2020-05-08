var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    role: String
})

var User = mongoose.model('User', UserSchema)
module.exports = {User: User}