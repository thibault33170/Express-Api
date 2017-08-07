const mongoose = require('mongoose')
const db = require('../../config/db')

mongoose.connect(db.url)
const Schema = mongoose.Schema

let UserSchema = new Schema({
    'name' : String,
    'username' : String,
    'email' : String,
    'created_at' : Date,
    'updated_at' : Date,
    'deleted_at' : Date
}, {collection: 'users'})

let UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel