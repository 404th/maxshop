const { User } = require("../../../Schema/schema_auth")
const auth_post_register = validationResult => async (req, res, next) => {
const createError = require("../../../errorMaker")

  // Checking for validation errors
  const ERRORS = validationResult(req)
  if ( !ERRORS.isEmpty() ){
    return res.status(403).json({
      data:[],
      errors:[ ...ERRORS.errors ]
    })
  }

  //
  try {

    const { email, username, password } = req.body
    
    // check for if user exist
    let existUser = await User.findOne({ email })
    if ( !existUser ){
      // save new user to DB
      let createdUser = await User.create({ email, username, password })
      // check if saved to DB or not
      if ( createdUser ) {
        return res.status(200).json({
          data: {
            value: createdUser,
            msg:"User signed up!",
            param:"username",
            location:"auth_post_register.js"
          },
          errors: []
        })
      }
      // send server error if not saved to DB
      return res.status( 500 ).json({
        data: {},
        errors:[
          createError( new Error("Not saved to DB"), "User is not saved to DB", "username", "auth_post_register.js"  )
        ]
      })

    } else {
      return res.status(409).json({
        data: {},
        errors:[
          createError( new Error("Email registered before!"), "You are registered before!", "email", "auth_post_register.js" )
        ]
      })
    }

  } catch( err ){
    console.log( err )
    return res.status(500).json({
      data: {},
      errors:[
        createError( new Error("Internal Server error!"), "Internal Server error while registering!", "username", "auth_post_register.js" )
      ]
    })
  }

}

module.exports = auth_post_register