const userProfileModel = require('../models/userProfileModel');

const getProfile = async (body) => {
    try {
        let insertProfile = await userProfileModel.collection.insert(body);
        return insertProfile;
    }
    catch(error){
        return error;
    }
};

module.exports = getProfile;