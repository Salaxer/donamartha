import { AllScreen } from "@Components";
import { NextPage } from "next";


const Offline:NextPage = () =>{
	const onject = {}
	return (
		<AllScreen>
			Parece que te encuentras en modo Offline, favor de conectarte a una red para continuar
		</AllScreen>
	)
}

export default Offline;