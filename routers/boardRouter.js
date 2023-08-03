import { Router } from "express";
import { readPost, writePost, updatePost, deletePost } from "../controllers/boardController.js";
import { readNotice, writeNotice, updateNotice, deleteNotice } from "../controllers/boardController.js";
import { getBoardList, getNoticeList } from "../controllers/boardController.js"

const boardRouter = Router();

boardRouter.route("/boardList").get(getBoardList);
boardRouter.route("/post").post(writePost).get(readPost).patch(updatePost).delete(deletePost)
boardRouter.route("/notice").post(writeNotice).get(readNotice).patch(updateNotice).delete(deleteNotice);

export default boardRouter;