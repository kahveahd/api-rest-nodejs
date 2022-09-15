const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/ejercicio'

module.exports = ()=>{
    const connect = ()=>{
        
        mongoose.connect(
            uri,
            {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
            },
            (err)=>{
                if(err){
                    console.log('Ups an database connection error occurred')
                }
                else{
                    console.log('Database connected successfully')
                }
            }
        )
    }

    connect()
}