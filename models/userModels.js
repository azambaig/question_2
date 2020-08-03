const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/Question_2', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
});

let User = new mongoose.Schema({
    userName: String,
    Password: String,
    confirmPassword: String,
    accessToken: String,
    Expiry: Number
});

let userModel = mongoose.model('userModel', User);


module.exports = userModel;