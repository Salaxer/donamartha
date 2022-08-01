import { AllScreen } from "@Components";
import { FC } from "react";

const NotFound:FC<{error?: any}> = ({error}) => {
    return (
        <AllScreen>
            <h1 className="font-sans font-extrabold text-gray-700 text-6xl">Pagina no encontrada</h1>
            <p className="font-sans font-bold text-gray-700 text-2xl">{error ? error : null}</p>
        </AllScreen>
    )
}
export default NotFound;