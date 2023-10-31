import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config() 

const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('SERVER STARTED ON PORT', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

// app.listen(3001, () => console.log("SERVER STARTED!"))

const Storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req,file,cb) => {
        cb(null, file.originalname)
    }
})