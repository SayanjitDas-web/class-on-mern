const mongoose = require("mongoose")

exports.connectToDb = async () => {
    try{
        const con = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`mongodb connected successfully at ${con.connection.port}`)
    }catch(err){
        console.log("mongodb connection err: ",err)
    }
}
