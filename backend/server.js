const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config({ path:"./.env" })

// middlewares
app.use( cors() )
app.use( express.json() )
// !!! middlewares

// connecting to MongoDB
mongoose.connection(  )

// initializing routes

// !!! initializing routes

// listening PORT
const PORT = process.env.PORT || 8181
app.listen( PORT, () => console.log(`Server is running on PORT:${ PORT }`) )
// !!! listening PORT