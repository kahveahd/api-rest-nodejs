const model = require('../../domain/city')

const optionPaginate = {
    limit:15,
    page:1
}

exports.getAllCitiesPaginate = (req,res)=>{
    const nameQuery = req.query.name
    const codeQuery = req.query.code

    if(nameQuery || codeQuery)
        model.paginate(
            { $or: [{ name: nameQuery }, { code: codeQuery }] },
            optionPaginate,
            (error,data)=>{
            res.send(data) 
        })
    else
        model.paginate({},optionPaginate,(error,data)=>{
            res.send(data) 
        })
}
