import { User, UserCredential } from "firebase/auth";
import { GlobalFirebaseResponse } from "./firebase";

export interface RequestFirebaseClient{
	createUser(data: newUSer): Promise<GlobalFirebaseResponse<UserCredential>>;
	updateUser(data: updateCurrentUser): Promise<GlobalFirebaseResponse<boolean>>;
	sendVerification(user: User): Promise<GlobalFirebaseResponse<boolean>>;
}

interface updateCurrentUser {
	displayName?: string | null;
	photoURL?: string | null;
}

interface newUSer {
	email: string;
	password: string;
}