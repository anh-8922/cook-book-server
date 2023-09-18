import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
export default async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('CONNECTINNG to DB:')
    } catch (error){
        console.log('error CONNECTINNG to DB:', error.message)
    }
}