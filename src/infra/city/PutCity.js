const model = require('../../domain/city')
const getObjectId = require('../../domain/services/getObjectId')

exports.putCity = (req,res)=>{
    const { id } = req.params
    const objectId = getObjectId.getObjectId(id)
    const dataPost = req.body
    
    model.updateOne(
        {_id: objectId},
        dataPost, 
        (error,data)=>{
        if(data)    
            res.send({
                data,
                message:'Successful PUT action',
            })
        else
            res.send({
                message:'Error to update City',
                description:error
            })
    }) 
}