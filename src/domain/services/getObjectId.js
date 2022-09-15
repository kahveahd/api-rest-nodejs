const mongoose = require('mongoose') 

exports.getObjectId = (id)=>{
    return mongoose.Types.ObjectId(id)
}
