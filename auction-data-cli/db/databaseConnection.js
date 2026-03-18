import mongoose from "mongoose";

const connectingDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auctioncli");
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.log("Somethings happened", error);
    process.exit(1);
  }
};
// map global promise - get rid of warning
mongoose.Promise = global.Promise;
// connecting to db

export default connectingDb;
