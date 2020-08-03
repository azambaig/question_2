var express = require('express');
var router = express.Router();
const validator = require('../validators/userValidator');
const { validationResult } = require('express-validator');

const login = require('../controllers/userControllers');
const findUser = require('../controllers/findUser');


router.post('/login', validator.validateUser, async (req, res) => {
  try {
    const error = validationResult(req.body);
    if (!error.isEmpty()) {
      throw ({ error: error.array() });
    } else {
      let userLogin = await login(req.body);
      res.send(userLogin);
    }
  } catch (error) {
    res.status(401).send(error);
  }
});

router.post('/address', async (req, res) => {
  try {
    console.log(req.headers.token);
    const findDetails = await findUser(req.headers, req.body);
    res.send(findDetails);
  }
  catch (error) {
    res.status(401).send(error);
  }
});


module.exports = router;
