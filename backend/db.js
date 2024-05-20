import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://yasminebenghomrani:zmy021734610@atlascluster.fs7q2wo.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log("Error in DB connection");
  }

  console.log("DB connected with success");
}

export default connectDB;
