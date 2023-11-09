import mongoose from "mongoose";

const connectDB = (req, res) => {
    try {
        mongoose.connect(process.env.MONGO_ATLAS_URI)
        console.log("--> database connection successful <---".italic.blue);
    } catch (error) {
        console.log(`--> Error in connecting database: -->`.italic.red, error.message);
    }
}

export default connectDB;