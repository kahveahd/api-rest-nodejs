const model = require('../../domain/city')

exports.getAllCities = (req,res)=>{
    const nameQuery = req.query.name
    const codeQuery = req.query.code

    if(nameQuery || codeQuery)
        model.find(
            { $or: [{ name: nameQuery }, { code: codeQuery }] },
            (error,data)=>{
            res.send(data) 
        })
    else
        model.find({},(error,data)=>{
            res.send(data) 
        })
}
