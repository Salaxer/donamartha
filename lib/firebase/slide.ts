import { getApp } from "firebase/app";
import { DocumentData, getFirestore, QueryDocumentSnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import initFirebase from "./firebase.init";


initFirebase();
const db = getFirestore(getApp());

interface DocSlide extends DocumentData{
    id: ""
}

export const getSlide = async ():Promise<QueryDocumentSnapshot<DocumentData>[]> =>{
    let slide: QueryDocumentSnapshot<DocumentData>[] = [];
    try {
        const querySnapshot = await getDocs(collection(db, "Slide"));
        slide =  querySnapshot.docs;
    } catch (error) {
        console.log('algo salio mal :(');
        console.log(error);
    }
    return slide;
}