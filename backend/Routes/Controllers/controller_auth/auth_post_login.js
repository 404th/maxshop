const { User } = require("../../../Schema/schema_auth")
const auth_post_login = validationResult => async (req, res) => {
  const createError = require("../../../errorMaker")
  const bcrypt = require("bcrypt")
  const jwt = require("jsonwebtoken")

  // Checking for validation errors
  const ERRORS = validationResult(req)
  if (!ERRORS.isEmpty()) {
    return res.status(403).json({
      data: [],
      errors: [...ERRORS.errors]
    })
  }

  //
  try {
    const { email, password } = req.body
    // check for if user exist
    let existUser = await User.findOne({ email })
    if (existUser) {
      // check if password is matched
      let match = await bcrypt.compare(password, existUser.password)
      if (match) {
        // creating token
        let userToken = await jwt.sign({ id: existUser._id }, process.env.SECRET_KEY)
        
        return res.status(200).json({
          data: {
            value: {
              username: existUser.username,
              email: existUser.email,
              bearerToken: `Bearer ${ userToken }`
            },
            msg: "User logged in!",
            param: "email",
            location: "auth_post_login.js"
          },
          errors: []
        })
      } else {
        return res.status(403).json({
          data: [],
          errors: [
            createError(new Error("Password is not matched!"), "Password is wrong", "password", "auth_post_login.js")
          ]
        })
      }

    } else {
      return res.status(403).json({
        data: [],
        errors: [
          createError(new Error("User not found!"), "You are not registered!", "email", "auth_post_login.js")
        ]
      })
    }

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      data: [],
      errors: [
        createError(err, "Internal Server error while logging in!", "email", "auth_post_login.js")
      ]
    })
  }

}

module.exports = auth_post_login