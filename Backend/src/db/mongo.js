import mongoose from "mongoose";
import { DB_NAME } from "../constsants.js";


const connectDB = async () =>{
    try {
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connected Woow !!! DB host : ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("mangoDB connection errorr = ",error );
        process.exit(1)
    }
}


export default connectDB