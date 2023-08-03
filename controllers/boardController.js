import { getFirestore, addDoc, collection, updateDoc, getDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
import { firebaseApp } from "../db.js";

const firebaseDB = getFirestore(firebaseApp);

export const writePost = async (req, res) => {
    try {
        const { title, content, authorEmail, authorName } = req.body;

        await addDoc(collection(firebaseDB, "post"), {
            title,
            content,
            authorEmail,
            authorName
        })

        return res.sendStatus(200);
    } catch (e) {
        console.log(`[Write Post API ERROR] ${e}`);
        return res.end();
    }
}

export const readPost = async (req, res) => {
    try {
        const { id } = req.body;

        const docRef = doc(firebaseDB, "post", id);
        const docSnapshot = await getDoc(docRef);

        return res.send(docSnapshot.data());
    } catch (e) {
        console.log(`[Read Post API ERROR] ${e}`);
        return res.end();
    }
}

export const updatePost = async (req, res) => {
    try {
        const { title, content, id } = req.body;

        const docRef = doc(firebaseDB, "post", id);
        await updateDoc(docRef, {
            title,
            content
        })

        return res.sendStatus(200);
    } catch (e) {
        console.log(`[Update Post API ERROR] ${e}`);
        return res.end();
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.body;

        const docRef = doc(firebaseDB, "post", id);
        await deleteDoc(docRef);

        return res.sendStatus(200);
    } catch (e) {
        console.log(`[Delete Post API ERROR] ${e}`);
        return res.end();
    }
}

export const writeNotice = async (req, res) => {
    try {
        const { title, content, authorEmail, authorName } = req.body;

        await addDoc(collection(firebaseDB, "notice"), {
            title,
            content,
            authorEmail,
            authorName
        })

        return res.sendStatus(200);
    } catch (e) {
        console.log(`[Write Notice API ERROR] ${e}`);
        return res.end();
    }
}

export const readNotice = async (req, res) => {
    try {
        const { id } = req.body;

        const docRef = doc(firebaseDB, "notice", id);
        const docSnapshot = await getDoc(docRef);

        return res.send(docSnapshot.data());
    } catch (e) {
        console.log(`[Read Notice API ERROR] ${e}`);
        return res.end();
    }
}

export const updateNotice = async (req, res) => {
    try {
        const { title, content, id } = req.body;

        const docRef = doc(firebaseDB, "notice", id);
        await updateDoc(docRef, {
            title,
            content
        })

        return res.sendStatus(200);
    } catch (e) {
        console.log(`[Update NOtice API ERROR] ${e}`);
        return res.end();
    }
}

export const deleteNotice = async (req, res) => {
    try {
        const { id } = req.body;

        const docRef = doc(firebaseDB, "notice", id);
        await deleteDoc(docRef);

        return res.sendStatus(200);
    } catch (e) {
        console.log(`[Delete Notice API ERROR] ${e}`);
        return res.end();
    }
}

export const getBoardList = async (req, res) => {
    try {
        const q = collection(firebaseDB, "post");
        const querySnapshot = await getDocs(q);

        const postData = querySnapshot.docs.map(doc => ({
            ...doc.data()
        }));

        return res.send(postData);
    } catch (e) {
        console.log(`[BoardList API ERROR] ${e}`);
        return res.end();
    }
}

export const getNoticeList = async (req, ers) => {
    try {
        const q = collection(firebaseDB, "notice");
        const querySnapshot = await getDocs(q);

        const postData = querySnapshot.docs.map(doc => ({
            ...doc.data()
        }));

        return res.send(postData);
    } catch (e) {
        console.log(`[NoticeList API ERROR] ${e}`);
        return res.end();
    }

}