// import { createUserWithEmailAndPassword, firebaseAuth, signInWithEmailAndPassword, updateProfile } from "../db.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseApp } from "../db.js";

const firebaseAuth = getAuth(firebaseApp);

export const postJoin = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        await updateProfile(firebaseAuth.currentUser, { displayName: name });

        return res.sendStatus(200);
    } catch ({ message }) {
        // console.log("Join Error : ", message);
        let sendErrorMsg = "";

        if (message.includes("weak-password")) sendErrorMsg = "비밀번호는 6자리 이상이여야 합니다.";
        else if (message.includes("email-already-in-use")) sendErrorMsg = "이미 가입된 이메일입니다.";

        return res.send(sendErrorMsg);
    }
}

export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);

        return res.send({ 'userName': user.displayName });
    } catch ({ message }) {
        // console.log("Login Error : ", message);
        let sendErrorMsg = "";

        if (message.includes("invalid-email")) sendErrorMsg = "존재하지 않는 계정입니다.";
        else if (message.includes("wrong-password") || message.includes("missing-password")) sendErrorMsg = "비밀번호가 올바르지 않습니다.";

        return res.send(sendErrorMsg);
    }
}