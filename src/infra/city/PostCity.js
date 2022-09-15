const model = require('../../domain/city')

exports.postCity = (req,res)=>{
    const dataPost = req.body
    model.create(dataPost, (error,data)=>{
        if(data)    
            res.send({
                data,
                message:'Successful POST action',
            })
        else
            res.send({
                message:'Error to insert City',
                description:error
            })
    }) 
}