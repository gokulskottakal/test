const { mongoclient, MongoClient } = require ('mongodb');
const dbname = 'shopping'
const state={
    db:null
}

module.exports.connect = async function (done) {
    const uri = "mongodb://localhost:27017/";  
    const Client = new MongoClient(uri);
    
    try {
        const connect = await Client.connect((data)=>{
             state.db = data.db(dbname)
        })
        console.log('connected mongodb')

        done()


    } catch (error) {
        return done(err)
    }
    
    
}



module.exports.get = function(){
    return state.db
}
