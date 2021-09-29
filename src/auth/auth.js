import { addDoc, collection } from '@firebase/firestore';
import { db } from "../firebase/firebase-config";

export const newUser = async(user) => {
    await addDoc(collection(db, `usuarios`), user);
}