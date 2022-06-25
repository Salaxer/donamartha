import { FirebaseError } from "firebase/app";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export interface GlobalFirebaseResponse<T = any>{
    response: T | undefined,
    error: FirebaseError | string | undefined,
}
export interface RequestFirebase{
    getMenu(): Promise<GlobalFirebaseResponse<DocumentSnapshot<DocumentData>[]>>;
    getItemMenu(id: string): Promise<GlobalFirebaseResponse<DocumentSnapshot<DocumentData>>>;
}