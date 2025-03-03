const mongoose = require('mongoose')

//-------------Mongoose Schema for Users goes here--------------//
//-------------------------EXAMPLE----------------------------//
    const NewUser = new mongoose.Schema({
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false},
    }, {
        timestamps: true
    })

    module.exports = mongoose.model("User", NewUser)