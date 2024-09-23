import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connectmongo = await mongoose.connect(
      String(process.env.CONNECT_MONGODB_URI)
    );
    console.log("MongoDB connected successfully");
    return connectmongo;
  } catch (error) {
    console.log(error);
  }
}
