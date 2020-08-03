const userModel = require('../models/userModels');
const getProfile = require('./getProfile');

const findUser = async (headers, body) => {
    let token = headers.token;
    try {
        let checkId = await userModel.findOne({ _id: token });
        checkId = JSON.parse(JSON.stringify(checkId));

        let Time = new Date();
        let currentTime = Time.getTime();
        
        if (checkId.Expiry > currentTime) {
            body._id = token;
            let getUserProfile = await getProfile(body);
            return getUserProfile;
        }
        else
            return `token Expired`;
    } catch (error) {
        return error;
    }
};

module.exports = findUser;