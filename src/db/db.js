import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"; 

// const uri = "mongodb+srv://jaydhiman01:jay123@cluster0.zdo7eny.mongodb.net"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB host: ${connectionInstance.connection.host} `);
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;
