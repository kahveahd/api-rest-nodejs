const model = require('../../domain/city')
const getObjectId = require('../../domain/services/getObjectId')

exports.deletetCity = (req,res)=>{
    const { id } = req.params
    const objectId = getObjectId.getObjectId(id)
    const dataPost = req.body
    
    model.deleteOne(
        {_id: objectId},
        dataPost, 
        (error,data)=>{
        if(data)    
            res.send({
                data,
                message:'Successful DELETE action',
            })
        else
            res.send({
                message:'Error to update City',
                description:error
            })
    })  
}