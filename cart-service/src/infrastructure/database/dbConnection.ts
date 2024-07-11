import mongoose from "mongoose";

export default async () => {
  require("dotenv").config();
  try {
    await mongoose.connect(String(process.env.MONGODB_URL).trim());
    console.log(` 🍃🍃🍃🍃🍃🍃 MongoDB connected successfully!🍃🍃🍃🍃🍃🍃`);
    
  } catch (error: any) {
    console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
    console.error(error.message);
    process.exit(1);
  }
};
