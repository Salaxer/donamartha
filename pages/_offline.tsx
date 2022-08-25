import { AllScreen } from "@Components";
import { NextPage } from "next";


const Offline:NextPage = () =>{
	return (
		<AllScreen>
			Parece que te encuentras en modo Offline, por favor conectate a una red para continuar
		</AllScreen>
	)
}

export default Offline;