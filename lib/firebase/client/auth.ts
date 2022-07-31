import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import initFirebase from "../firebase.init";


import SHA256 from 'crypto-js/sha256'

import { GlobalFirebaseResponse } from "@MyTypes/firebase";
import { RequestFirebaseClient } from "@MyTypes/firebase-client";
import { FirebaseError } from "firebase/app";

export const newUser:RequestFirebaseClient["newUser"] = async ({email, password, name}) =>{
    let response: GlobalFirebaseResponse<UserCredential> = { error: undefined, response: undefined }
    initFirebase();
    const auth = getAuth();
    const arraySha = SHA256(password);
    const passwordHash = arraySha.toString()
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, passwordHash);
        response.response = userCredential;
    } catch (error) {
        response.error = error as FirebaseError;
    }
    return response
}