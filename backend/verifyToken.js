const jwt = require("jsonwebtoken")

function verifyToken (req, res, next) {
  // comin token
  const bearertoken = req.headers.bearertoken
  if ( bearertoken ) {
    // cut Token from Bearer
    const bearer = bearertoken.split(' ')
    const userToken = bearer[1]
    
    jwt.verify( userToken, process.env.SECRET_KEY, (err, decod) => {
      if ( err ) {
        return res.status( 200 ).json({
          isChecked: false,
          msg:"Token is not valid!"
        })
      } else {
        next()
      }
    } )

  } else {
    return res.status(200).json({
      isChecked: false,
      msg:"Token not found in headers"
    })
  }
}

module.exports = verifyToken






// headers: {"Authorization" : `Bearer ${token}`}





