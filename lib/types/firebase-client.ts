import { UserCredential } from "firebase/auth";
import { GlobalFirebaseResponse } from "./firebase";

export interface RequestFirebaseClient{
    newUser(data: newUSer): Promise<GlobalFirebaseResponse<UserCredential>>;
}

interface newUSer {
    email: string;
    password: string;
    name: string;
}