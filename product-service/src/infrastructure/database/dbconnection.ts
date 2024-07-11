import mongoose from "mongoose";

export default async () => {
  require("dotenv").config();
  console.log(process.env.MONGODB_URI);
  try {
    await mongoose.connect(String(process.env.MONGODB_URI).trim());
    console.log(`🗽🗽🗽Product_Database connected with MongoDB 🗽🗽🗽`); 
   
  } catch (error: any) {
    console.error(`❗❗❗ Product_Database Connection failed ❗❗❗`);
    console.error(error.message);
    process.exit(1);
  }
};
