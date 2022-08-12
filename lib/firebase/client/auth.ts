import { getAuth, createUserWithEmailAndPassword, UserCredential, updateProfile, sendEmailVerification } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import initFirebase from "../firebase.init";

import SHA256 from 'crypto-js/sha256'

import { GlobalFirebaseResponse } from "@MyTypes/firebase";
import { RequestFirebaseClient } from "@MyTypes/firebase-client";

import { authErrosEn } from "utils/firebaseErrors";

export const newUser:RequestFirebaseClient["newUser"] = async ({email, password, name}) =>{
	let response: GlobalFirebaseResponse<UserCredential> = { error: undefined, response: undefined }
	initFirebase();
	const auth = getAuth();
	const arraySha = SHA256(password);
	const passwordHash = arraySha.toString()
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, passwordHash);
		await sendEmailVerification(userCredential.user);
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

export const updateUser:RequestFirebaseClient["updateUser"] = async ({ displayName, photoURL }) =>{
	let response: GlobalFirebaseResponse<boolean> = { error: undefined, response: undefined };
	initFirebase();
	const auth = getAuth();
	if (!auth.currentUser) return response;
	try {
		updateProfile(auth.currentUser, { displayName, photoURL }).then(()=>{
			response.response = true;
		});
	} catch (error) {
		const e = authErrosEn[(error as FirebaseError).code];
		response.error = e || {
			code: "error desconocido",
			message: `porfavor reporta este error con el dueño de la pagina, code: ${(error as FirebaseError).code}`
		}
	}
	return response;
}