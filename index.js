import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet"
import dotenv from "dotenv";
import authRouter from "./routers/authRouter.js";
import boardRouter from "./routers/boardRouter.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const logger = morgan("dev");

app.use(helmet());
app.use(logger);
app.use(cors({ credentials: true }))
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/auth", authRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
    console.log(`Server is Listening on port 3000🚀`);
    console.log(`http://localhost:${PORT}`);
})

export default app;