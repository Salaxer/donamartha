import { getAuth, 
	createUserWithEmailAndPassword,
	UserCredential,
	updateProfile,
	sendEmailVerification,
	signOut,
	signInWithEmailAndPassword
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import initFirebase from "../firebase.init";

import SHA256 from 'crypto-js/sha256'

import { GlobalFirebaseResponse } from "@MyTypes/firebase";
import { RequestFirebaseClient } from "@MyTypes/firebase-client";

import { authErrosEn } from "utils/firebaseErrors";

export const createUser:RequestFirebaseClient["createUser"] = async ({ email, password }) =>{
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

export const updateUser:RequestFirebaseClient["updateUser"] = async ({ displayName, photoURL }) =>{
	initFirebase();
	const auth = getAuth();
	if (!auth.currentUser) return {
		error: {
			code: "No autenticado",
			message: "No estas autenticado, necesitas iniciar sesion para realizar esta accion"
		}, 
		response: false
	};
	try {
		await updateProfile(auth.currentUser, { displayName, photoURL });
		return { response: true, error: undefined }
	} catch (err) {
		const e = err as FirebaseError;
		return {
			response: false,
			error: authErrosEn[e.code] || {
				code: "error desconocido",
				message: `porfavor reporta este error con el dueño de la pagina, code: ${e.code || 0o0000}`
			}
		}
	}
}

export const sendVerification:RequestFirebaseClient["sendVerification"] = async ( user ) =>{
	try {
		await sendEmailVerification(user, { url: "https://donamartha.com.mx/signin" });
		return ({ response: true, error: undefined });
	} catch {
		return ({ response: false, error: { code: "asd", message: "" } });
	}
}

export const signOutUser = ()=>{
	initFirebase();
	const auth = getAuth();
	signOut(auth);
}

export const signInUser: RequestFirebaseClient["signInUser"] = async ({ email, password}) =>{
	initFirebase();
	const auth = getAuth();
	try {
		const user = await signInWithEmailAndPassword(auth, email, password)
		return ({ response: user, error: undefined });
	} catch (err) {
		const e = err as FirebaseError;
		return {
			response: undefined,
			error: authErrosEn[e.code] || {
				code: "error desconocido",
				message: `porfavor reporta este error con el dueño de la pagina, code: ${e.code || 0o0000}`
			}
		}
	}
}