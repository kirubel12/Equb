import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/user.routes.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server started on port ${process.env.PORT}`)
})
