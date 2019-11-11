const { check } = require("express-validator");

module.exports = {
  register: [
    check("name", "Please enter name")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password should have min 6 characters").isLength({
      min: 6
    })
  ],
  login: [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password should have min 6 characters').exists()
  ],
  todo: [
    check("description", "Please enter todo description")
      .not()
      .isEmpty(),
  ],
  bucket: [
    check("name", "Please enter bucket name")
      .not()
      .isEmpty(),
  ]
};
