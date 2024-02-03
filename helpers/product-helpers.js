const { log } = require('handlebars')
var db=require('../config/connection')

module.exports={
    addProduct:async(product,callback)=>{
        console.log(product)

        await db.get().collection('product').insertOne(product).then((data)=>{
            console.log('file uploaded');
            callback(true)
        })
    }
}