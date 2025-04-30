import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import 'dotenv/config'

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})