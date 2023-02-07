// Importing libraries
require('dotenv').config({ path: ".../config/config.env" })
const express = require("express")
const connectDB = require('../config/db')
const errorHandler = require("../middleware/error");
const cors = require('cors');
const morgan = require('morgan');

// Connect DB
connectDB();

// Intialize App 
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('short'))

// app.use("/.netlify/functions/api", require("../routes/auth"))
// app.use("/.netlify/functions/api/private", require("../routes/private"))

// Error Handler (should be last piece of middlewear)
app.use(errorHandler)

// Port
const PORT = process.env.PORT || 4000;

// Boiler Plate Code
app.get('/', (req, res) => {
    res.send('Hi I am the Server Of Login-signup developed by Syed Bakhtawar Fahim')
})
app.get('/home', (req, res) => {
    res.send('I am the Home Page Of Login-signup developed by Syed Bakhtawar Fahim')
})
app.get('*', (req, res) => {
    res.send('Hi I am the Server Of Login-signup developed by Syed Bakhtawar Fahim')
})

// Server listing
// const server = app.listen(PORT, () => console.log(`Server is running on ${PORT}`) )


// Error Handling
process.on('unhandledRejection', (err, promise) =>{
    console.log(`Logged Error: ${err}`)
    app.close(() => process.exit(1))
})

app.use('/.netlify/functions/api', require('../routes/auth'))
module.exports.handler = serverless(app)

//  "start": "nodemon server.js",
// "server": "nodemon server.js"