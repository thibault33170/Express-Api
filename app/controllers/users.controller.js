const User = require('../models/user.model')

class users_controller {

    static findAll (cb) {
        User.find().then((docs) => {
            cb(docs)
        })
    }

    static findOne (id, cb) {
        User.findById(id, (err, user) => {
            if (err)
                throw err

            cb(user)
        })
    }

    static create (data) {
        let user = new User(data)

        user.save(err => {
            if (err)
                throw err
        })
    }

    static update (id, data, cb) {
        User.findByIdAndUpdate(id, {$set: data}, {new: true}, (err, user) => {
            if (err)
                throw err

            cb(user)
        })
    }

    static delete (id, cb) {
        User.findOneAndRemove({id: id}, (err, user) => {
            if (err)
                throw err

            cb(user)
        })
    }
}

module.exports = users_controller