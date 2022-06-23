import { getApp } from "firebase/app";
import { DocumentData, getFirestore, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import initFirebase from "./firebase.init";


initFirebase();
const db = getFirestore(getApp());


export const getMenu = async ():Promise<QueryDocumentSnapshot<DocumentData>[]> =>{
    let menu: QueryDocumentSnapshot<DocumentData>[] = [];
    try {
        const querySnapshot = await getDocs(collection(db, "Menu"));
        menu =  querySnapshot.docs;
    } catch (error) {
        console.log('algo salio mal :(');
        console.log(error);
    }
    return menu;
}
