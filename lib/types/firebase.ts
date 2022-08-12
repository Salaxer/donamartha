import { FirebaseError } from "firebase/app";
import { DocumentData, DocumentSnapshot } from "firebase/firestore/lite";
type MyError = {
    code: string;
    message: string;
}

export interface GlobalFirebaseResponse<T>{
    response: T | undefined,
    error: FirebaseError | MyError | undefined,
}
export interface RequestFirebase{
    getMenu(): Promise<GlobalFirebaseResponse<DocumentSnapshot<DocumentData>[]>>;
    getItemMenu(id: string): Promise<GlobalFirebaseResponse<DocumentSnapshot<DocumentData>>>;
}