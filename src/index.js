import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/user.routes.js";
import equbRouter from "./routes/equb.routes.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/equbs", equbRouter);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server started on port ${process.env.PORT}`)
})
