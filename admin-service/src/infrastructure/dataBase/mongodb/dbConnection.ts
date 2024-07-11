import mongoose from "mongoose";

export default async()=>{
    require('dotenv').config();

    try {
        
        await  mongoose.connect(String(process.env.MONGODB_URI))
        console.log(`----MONGO DB CONNECTED ----`)
    } catch (error:any) {
        console.log(error?.message)
        console.log(`
        ❗❗❗❗MONGON DB CONNECTION ERROR❗❗❗❗
        `);
        
    }
}
