var mongoose = require('mongoose')
var User = require("../model/User").User

const createNew = (email, password, name, role, token) => {
    const user = new User({
        email: email,
        password: password,
        name: name,
        role: role,
        token: token
    })
    user.save()
}
const findByEmail = (email, callback) => {
    User.findOne({email: email},(err, res)=> {
        callback(res)
    })
}
module.exports = {
    createNew: createNew,
    findByEmail: findByEmail
}