const mongoose = require('mongoose');

UserSchema = mongoose.Schema({

    //_id: mongoose.Schema.Types.ObjectId,
    //username: String,
    email: String,
    password: String,
    phone: String
});


module.exports = mongoose.model('Users', UserSchema)