import { Success } from "@MyTypes/api"

export const dataSuccess:Success["data"] = (data, meta) => {
    return{
        data,
        metadata: {
            empty: meta.empty,
            size: meta.size,
        }
    }
}