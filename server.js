const express = require('express')
const initDatabaseMongo = require('./config/database')
const bodyParser = require('body-parser')
const cities = require('./src/routes/city')

const app = express()
const port = 3001

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