import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);


app.listen(PORT, () => {
    try {
        console.log(`Server is running on port ${PORT}`);
        connectDB();
    } catch (error) {
        console.log("Error connecting to Database", error);
    }
})