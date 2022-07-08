// requiring .env package so we can get things out of our .env file
require('dotenv').config()
// requiring mongoose
const mongoose = require('mongoose')

const DATABASE_URI = process.env.DATABASE_URI

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
// connecting mongoDB to mongoose
mongoose.connect(DATABASE_URI, config)

mongoose.connection
// handle openings of connection
// running code block on open
// console logging a string
    .on('open', () => console.log('Connected to Mongoose'))
    // since we have opened a connection we have to close it
    // running code block on close
    .on('close', () => console.log('Disconnected from Mongoose'))
    // handle any error
    // running code block on error and console logging to see the error
    .on('error', err => console.error(err))

    module.exports = mongoose