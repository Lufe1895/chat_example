import { collection, getDocs, setDoc } from "@firebase/firestore"
import { db } from "../firebase/firebase-config";

export const getChats = () => {
    return getDocs(collection(db, `usuarios`));
}

export const setMessage = ({ user, destiny, msgs, newMsg }) => {
    return setDoc(collection(db, `usuarios`, { user, destiny, msgs: [msgs, newMsg] }));
}