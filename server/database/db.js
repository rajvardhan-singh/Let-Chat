import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    try {
        const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@letchat.urlkg6q.mongodb.net/?retryWrites=true&w=majority`
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("databse connected successfully");
    } catch (error) {
        console.log(('Error while connecting MOngodb..', error.message));
    }
}

export default Connection;