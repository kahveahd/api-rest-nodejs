const mongoose = require('mongoose') 
const mongoosePaginate = require('mongoose-paginate-v2')

const cityScheme = new mongoose.Schema(
    {
        name:{
            type:   String,
            unique: true,
            required:true
        },
        code:{
            type:   String,
            unique: true,
            required:true
        }
    },
    {
        versionKey: false,
        timestamps: false
    }
)

cityScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('city', cityScheme) 
