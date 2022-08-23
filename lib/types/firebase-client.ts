import { User, UserCredential } from "firebase/auth";
import { GlobalFirebaseResponse } from "./firebase";

export interface RequestFirebaseClient{
	createUser(data: newUser): Promise<GlobalFirebaseResponse<UserCredential>>;
	signInUser(data: SignIn): Promise<GlobalFirebaseResponse<UserCredential>>;
	updateUser(data: updateCurrentUser): Promise<GlobalFirebaseResponse<boolean>>;
	sendVerification(user: User): Promise<GlobalFirebaseResponse<boolean>>;
}

interface updateCurrentUser {
	displayName?: string | null;
	photoURL?: string | null;
}

interface SignIn extends newUser {}

interface newUser {
	email: string;
	password: string;
}