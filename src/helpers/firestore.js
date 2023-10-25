import { db } from "@/plugins/firebase";
import { doc, getDoc, getDocs, addDoc, setDoc, updateDoc, collection } from 'firebase/firestore';

/**
 * Fetches a document from a Firestore collection.
 *
 * @param {string} path - The path to the Firestore document.
 * @returns {Promise<Object|null>} A promise that resolves to an object representing the document, or `null` if the document does not exist. The object has an `id` property (the document ID) and properties for each field in the document.
 *
 * @example
 * GetDoc('users/user1').then(doc => console.log(doc));
 */
export async function GetDoc(path) {
    const docRef = doc(db, path)
    const snapshot = await getDoc(docRef)

    if (!snapshot.exists()) return null

    const data = snapshot.data()
    data.id = snapshot.id
    return data
}

/**
 * Fetches documents from a Firestore collection.
 *
 * @param {string} path - The path to the Firestore collection.
 * @returns {Promise<Array>} A promise that resolves to an array of documents. Each document is an object with an `id` property and properties for each field in the document.
 *
 * @example
 * GetDocs('users').then(docs => console.log(docs));
 */
export async function GetDocs(path) {
    const collectionRef = collection(db, path)
    const snapshot = await getDocs(collectionRef)
    const docs = []
    for (const doc of snapshot.docs) {
        const newObj = doc.data()
        newObj.id = doc.id
        docs.push(newObj)

        // docs.push({
        //     id: doc.id,
        //     amount: doc.data().amount
        //     // ...doc.data()
        // })
    }
    return docs
}

/**
 * Sets the data of a document in a Firestore collection.
 *
 * @param {string} path - The path to the Firestore document.
 * @param {Object} data - The data to be set in the document.
 * @returns {Promise<void>} A promise that resolves when the data has been set.
 *
 * @example
 * SetDoc('users/user1', { name: 'John Doe', email: 'john.doe@example.com' });
 */
export function SetDoc(path, data) {
    const docRef = doc(db, path)
    return setDoc(docRef, data)
}

/**
 * Update data of a document in a Firestore collection.
 *
 * @param {string} path - The path to the Firestore document.
 * @param {Object} data - The data to be updated in the document.
 * @returns {Promise<void>} A promise that resolves when the data has been updated.
 *
 * @example
 * UpdateDoc('users/user1', { name: 'John Doe', email: 'john.doe@example.com' });
 */
export function UpdateDoc(path, data) {
    const docRef = doc(db, path)
    return updateDoc(docRef, data)
}

/**
 * Adds a new document to a Firestore collection with the provided data.
 *
 * @param {string} path - The path to the Firestore collection.
 * @param {Object} data - The data to be added to the new document.
 * @returns {Promise<DocumentReference>} A promise that resolves to a reference to the newly added document.
 *
 * @example
 * AddDoc('users', { name: 'John Doe', email: 'john.doe@example.com' });
 */
export function AddDoc(path, data) {
    const collectionRef = collection(db, path)
    return addDoc(collectionRef, data)
}