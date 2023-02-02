const express = require('express')
const morgan = require('morgan')
const app = express()


const shortenRouter = require('./routes/shortenRouter.route')
const redirectRouter = require('./routes/redirectRouter.route')

// Middlewares
app.use(morgan('combined'))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send("Get Request to home routes")
})

app.use('/shorten', shortenRouter)
app.use('/', redirectRouter)

module.exports = app;
