import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if(mongoose.connection.readyState === 0) {
            const uri = process.env.MONGODB_URI;
            if (!uri) {
                throw new Error("MONGODB_URI is not defined");
            }
            await mongoose.connect(uri);
            console.log("DB Conection");
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;