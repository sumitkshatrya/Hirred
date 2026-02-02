const mongoose = require("mongoose")
 
const connectDB = async () => {
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("MONGODB connected successfully")
   } catch (error) {
    console.error("MONGODB connection failed:",error);
    process.exit(1);
   }
};
module.exports = connectDB;