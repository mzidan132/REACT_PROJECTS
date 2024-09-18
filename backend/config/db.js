import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: { w: 'majority' }
});

}
