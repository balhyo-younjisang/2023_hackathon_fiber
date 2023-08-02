import { createUserWithEmailAndPassword, firebaseAuth, signInWithEmailAndPassword, updateProfile } from "../db.js";

export const postJoin = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        await updateProfile(firebaseAuth.currentUser, { displayName: name });

        return res.sendStatus(200);
    } catch (err) {
        console.log("Join Error : ", err);
        return res.sendStatus(400);
    }
}

export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);

        return res.send(user.displayName);
    } catch (e) {
        console.log("Login Error :", e);
        return res.sendStatus(400)
    }
}