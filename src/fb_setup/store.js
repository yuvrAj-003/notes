import { auth, db } from "./config";
import { collection , query, where, doc, addDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";


const coll = collection(db , "notes");

// get data from database
async function getData(userId){
    const q = query(coll , where("id" , "==" , userId));
    const data = await getDocs(q);
    const filteredData = data.docs.map(v => ({
        ...v.data(),
        id: v.id
    }))
    return filteredData;
}

// add data
async function addData(userId){
    await addDoc(coll , {
        title: "new title",
        content: "new content",
        id: userId
    })
}

// delete Data
async function deleteData(userId){
    const noteDoc = doc(coll, userId)
    await deleteDoc(noteDoc);
}

// update Data
async function updateData(id, title, content){
    const noteDoc = doc(db, "notes" , id);
    await updateDoc(noteDoc, {title: title, content: content})
}

export {getData , addData, deleteData, updateData} 