// Importing libraries
require('dotenv').config({ path: "./config.env" })
const express = require("express")
const connectDB = require('./config/db')
const errorHandler = require("./middleware/error");
const cors = require('cors');
const morgan = require('morgan');

// Connect DB
connectDB();

// Intialize App 
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('short'))

app.use("/api/auth", require("./routes/auth"))
app.use("/api/private", require("./routes/private"))

// Error Handler (should be last piece of middlewear)
app.use(errorHandler)

// Port
const PORT = process.env.PORT || 4000;

// Server listing
const server = app.listen(PORT, () => console.log(`Server is running on ${PORT}`) )

// Error Handling
process.on('unhandledRejection', (err, promise) =>{
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
