import mongoos from "mongoose";

export const connectDB = async () => {
  try {
    //console.log("mongo_uri: ", process.env.MONGO_URI);
    const conn = await mongoos.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1); // 1 is failure, 0 for success
  }
};
