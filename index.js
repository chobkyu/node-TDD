const express = require('express')
const app = express()
const morgan = require('morgan')
const user = require('./api/user')

app.use(morgan('dev'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users',user)



app.listen(3000,() => {
    console.log('Example app listening on port 3000')
})

module.exports = app;