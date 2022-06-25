import { Success } from "@MyTypes/api"
import { QuerySnapshot, DocumentData } from "firebase/firestore"

export const dataSuccess:Success["data"] = (data, meta) => {
    return{
        data,
        metadata: {
            empty: meta.empty,
            size: meta.size,
        }
    }
}