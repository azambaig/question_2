const bcrypt = require('bcrypt');
const md5 = require('md5');
const userModel = require('../models/userModels');

const checkUser = async (confirmpassword, password, body) => {
    try {
        let matchDetails = await bcrypt.compare(confirmpassword, password);
        if (matchDetails) {
            let accesstoken = md5(Math.random() * 10000);
            body.accessToken = accesstoken;

            let Time = new Date();
            let currentTime = Time.getTime();
            body.Expiry = currentTime + 3600000;

            let insertToken = await userModel.collection.insert(body);
            let user_id = insertToken.ops[0]._id;
            return user_id;
        }
        else{
            return `Details not Matched.`
        }
    } catch (error) {
        return error;
    }
};

module.exports = checkUser;