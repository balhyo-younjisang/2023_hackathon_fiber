import { Router } from "express";
import { postJoin, postLogin } from "../controllers/authController.js";

const authRouter = Router();

authRouter.route("/login").post(postLogin);
authRouter.route("/join").post(postJoin);

export default authRouter;