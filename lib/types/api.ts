import { DocumentData, QuerySnapshot } from "firebase/firestore";

// Api Responnse
export interface DataDocsResponse<T = any>{
    data: T,
    metadata: Metadata,
}

interface Metadata {
    empty: boolean
    size: number,
}

export interface Success{
    data<T = any>(data:T, meta: QuerySnapshot<DocumentData>): DataDocsResponse<T>;
}