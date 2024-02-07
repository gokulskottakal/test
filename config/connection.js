const { mongoclient, MongoClient } = require ('mongodb');
const dbname = 'shopping'
const state={
    db:null
}

module.exports.connect()
    async function connect(done) {
    const uri = "mongodb://localhost:27017/";  
    const Client = new MongoClient(uri);
    
    try {
        const connect = await Client.connect(async(data)=>{
             state.db = await data.db(dbname)
        })
        await console.log('connected mongodb')

        done()


    } catch (error) {
        return done(err)
    }
    
    
}



module.exports.get = connect(){
    return state.db
}
