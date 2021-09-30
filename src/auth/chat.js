import { collection, doc, onSnapshot, setDoc } from "@firebase/firestore"
import { db } from "../firebase/firebase-config";

export const getChats = (callback) => {
    onSnapshot(collection(db, `usuarios`), (snapshot) => {
        callback(snapshot.docs);
    }, (err) => {
        return err;
    });
}

export const setMessage = ({user, newMsg, chats, destiny}) => {
    return setDoc(doc(db, `usuarios/${ user.uuid }`, { ...user, chats: [chats, { msg: newMsg, destiny }]}));
}