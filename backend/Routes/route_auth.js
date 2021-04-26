const router = require("express").Router()
const { validationResult, check } = require("express-validator")

const auth_post_login = require("./Controllers/controller_auth/auth_post_login")
const auth_post_register = require("./Controllers/controller_auth/auth_post_register")

//  PORT - /auth/login
router.post( "/login", [
  check( "email", "Insert valid email!" ).isEmail(),
  check( "password", "Password must be powerfull and longer than 5 chars!" ).isLength({ min:5 })
], auth_post_login( validationResult ) )

//  PORT - /auth/register
router.post( "/register", [
  check( "email", "Enter valid email!" ).isEmail(),
  check( "username", "Username must be inserted!" ).notEmpty(),
  check( "password", "Password must be powerfull and longer than 5 chars!" ).isLength({ min:5 })
], auth_post_register( validationResult ) )


module.exports = router