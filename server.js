const express = require('express')
const initDatabaseMongo = require('./config/database')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

const cities = require('./src/routes/city')

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(cities)

app.listen(port, ()=>{
    console.log('The application is now in line at port:' + port)
})

initDatabaseMongo()