var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RoomSchema = new Schema({
    roomName: String,
    creator: String,
    user: [{id: String}],
    chat: [{timestamp: {type: Date, default: Date.now}, chat: String}]
})
var Room = mongoose.model('Room', RoomSchema)
module.exports(Room)