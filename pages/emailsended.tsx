import { AllScreen } from "@Components";
import { NextPage } from "next";

const EmailSended:NextPage = () =>{
	return (
		<AllScreen>
			<h1 className="text-center text-2xl m-10"> Se ha enviado un correo a tu correo, confirma y vuelve a iniciar sesion</h1>
		</AllScreen>
	)
}

export default EmailSended;