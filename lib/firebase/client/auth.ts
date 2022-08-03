import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import initFirebase from "../firebase.init";

import SHA256 from 'crypto-js/sha256'

import { GlobalFirebaseResponse } from "@MyTypes/firebase";
import { RequestFirebaseClient } from "@MyTypes/firebase-client";
import { FirebaseError } from "firebase/app";

import { authErrosEn } from "utils/firebaseErrors";

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
        const e = authErrosEn[(error as FirebaseError).code];
        response.error = e || {
            code: "error desconocido",
            message: `porfavor reporta este error con el dueño de la pagina, code: ${(error as FirebaseError).code}`
        }
    }
    return response
}