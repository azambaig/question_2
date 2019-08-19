const bcrypt = require('bcrypt');
const checkUser = require('../controllers/checkUser');

const login = async (body) => {
    let username = body.userName;
    let password = body.Password;
    let confirmpassword = body.confirmPassword;

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    password = hash;
    try {
        let checkUserDetails = await checkUser(confirmpassword, password, body);
        return checkUserDetails;
    } catch (error) {
        return (error);
    }
};

module.exports = login;