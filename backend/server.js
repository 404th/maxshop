const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config({ path:"./.env" })
// mongoose.Promise = global.Promise

// middlewares
app.use( cors() )
app.use( express.json() )
// !!! middlewares

// connecting to MongoDB
async function startServer(){
  const MONGO_URI = process.env.MONGO_URI
  await mongoose.connect( MONGO_URI, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  }, err => {
    if(err) {
      console.log("Failed: DB is not connected!")
    } else {
      console.log("Success:DB is connected successfully!")
    }
  } )
}
startServer()
// !!! connecting to MongoDB

// initializing routes

// !!! initializing routes
// listening PORT
const PORT = process.env.PORT || 8181
app.listen( PORT, () => console.log(`Server is running on PORT:${ PORT }`) )
// !!! listening PORT