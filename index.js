const express = require('express')
const app = express()
const morgan = require('morgan')

const users = [
    {
        id:1,
        name:'hiyo'
    },
    {
        id:2,
        name:'poatan'
    },
    {
        id:3,
        name:'hello'
    },
]

app.use(morgan('dev'))


app.get('/users',(req,res) => {
    res.json(users)
});

app.listen(3000,() => {
    console.log('Example app listening on port 3000')
})

module.exports = app;