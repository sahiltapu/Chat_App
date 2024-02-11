import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

config();

app.use(express.json()); // to parse incoming requests with JSON payload (from req.body)
app.use(cookieParser()); // to parse incoming cookie from req.cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// app.get("/", (req, res) => {
//     //root route http://localhost:5000/
//     res.send("hello sahil");
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port http://localhost:${PORT}/`);
});
