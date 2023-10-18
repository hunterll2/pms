import { db } from "@/plugins/firebase";
import { doc, getDoc, addDoc, setDoc, collection } from 'firebase/firestore';

export async function GetDoc(path) {
    const docRef = doc(db, path)
    const snapshot = await getDoc(docRef)
    const data = snapshot.data()
    data.id = snapshot.id
    return data
}

export function SetDoc(path, data) {
    const docRef = doc(db, path)
    return setDoc(docRef, data)
}

export function AddDoc(path, data) {
    const collectionRef = collection(db, path)
    return addDoc(collectionRef, data)
}