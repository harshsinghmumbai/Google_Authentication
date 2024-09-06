import mongoose from "mongoose";

const ConnectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log("Error on Connect Mongodb File", error);
  }
};

export default ConnectMongodb;
