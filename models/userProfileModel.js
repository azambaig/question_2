const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/Question_2', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
});

let Schema = mongoose.Schema;
let UserProfile = new Schema({
    userId: Number,
    address: Number || String,
    city: String,
    state: String,
    pinCode: Number,
    phoneNo: Number
});

let userProfileModel = mongoose.model('userProfileModel', UserProfile);
module.exports = userProfileModel;