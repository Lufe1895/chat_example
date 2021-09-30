import { deleteDoc, doc, setDoc } from '@firebase/firestore';
import { db } from "../firebase/firebase-config";

export const newUser = async(user) => {
    return await setDoc(doc(db, `usuarios/${ user.uuid }`), { user: user.user, chats: []});
}

export const deletUser = async(id) => {
    return await deleteDoc(doc(db, `usuarios/${ id }`, ))
}