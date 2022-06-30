import { FirebaseError, getApp } from "firebase/app";
import {
    collection,
    getDocs,
    doc,
    DocumentData,
    DocumentSnapshot,
    getDoc, getFirestore, 
    QueryDocumentSnapshot 
} from "firebase/firestore";

import initFirebase from "./firebase.init";

import { RequestFirebase } from "@MyTypes/firebase";

initFirebase();
const db = getFirestore(getApp());
const menuRef = collection(db, "Menu");

export const getMenu:RequestFirebase["getMenu"] = async () =>{
    let response: QueryDocumentSnapshot<DocumentData>[] = [];
    let error;
    try {
        const querySnapshot = await getDocs(menuRef);
        response =  querySnapshot.docs;
    } catch (e) {
        e instanceof FirebaseError ? error = e : error = {code: "Error desconocido"};
    }
    return {
        response,
        error,
    };
}

export const getItemMenu:RequestFirebase["getItemMenu"] = async (id) =>{
    let response;
    let error; 
    const docRef = doc(db, "Menu", id);
    try {
        const docSnap = await getDoc(docRef);
        response =  docSnap;
    } catch (e) {
        e instanceof FirebaseError ? error = e : error = {code: "Error desconocido"};
    }
    return {
        response,
        error,
    };
}

export async function getAllItemsIds() {
    let response: QueryDocumentSnapshot<DocumentData>[] = [];
    let error;
    try {
        const querySnapshot = await getDocs(menuRef);
        response =  querySnapshot.docs;
    } catch (e) {
        e instanceof FirebaseError ? error = e : error = {code: "Error desconocido"};
    }
    return response.map(post => {
        return {
            params: {
                id: post.id,
                length: response.length,
            }
        }
    })
}