import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white
        .italic.bold
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white.bold);
  }
};

export default connectDB;
