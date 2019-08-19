const { check } = require('express-validator');

exports.validateUser = [check('userName', 'Username must be string').isString(),
check('Password').isLength({ min: 5 }).withMessage('Password must be atleast 5 chars long')];
