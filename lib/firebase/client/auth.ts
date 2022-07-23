import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import initFirebase from "../firebase.init";


import SHA256 from 'crypto-js/sha256'

import { GlobalFirebaseResponse } from "@MyTypes/firebase";
import { RequestFirebaseClient } from "@MyTypes/firebase-client";

export const newUser:RequestFirebaseClient["newUser"] = async ({email, password, name}) =>{
    let response: GlobalFirebaseResponse<UserCredential> = { error: undefined, response: undefined }
    initFirebase();
    const auth = getAuth();
    const arraySha = SHA256(password);
    const passwordHash = arraySha.toString()
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, passwordHash);
        response.response = userCredential;
        console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
    // createUserWithEmailAndPassword(auth, email, passwordHash)
    // .then((user) =>{
    //     response.response = user;
    //     console.log(user);
    // })
    // .catch((error)=>{
    //     response.error = error;
    //     console.error(error);
    // })
    return response
}