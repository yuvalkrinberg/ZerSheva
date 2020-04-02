import mongoose from 'mongoose'
const connection = {};

async function connectDb() {
    if(connection.isConnected){
        //use existiong connection to DB
        console.log("existing connection");
        return
    }
    // to use a new DB connection
    const db = await mongoose.connect( process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB Connection");
    connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
