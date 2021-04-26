const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = mongoose.Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  }
},{
  timestamps: true
})


UserSchema.pre( "save", async function (next) {
  let salt = await bcrypt.genSalt()
  let hashedPassword = await bcrypt.hash( this.password, salt )
  this.password = hashedPassword
  next()
} )

const User = mongoose.model( "User", UserSchema )
module.exports = { User }