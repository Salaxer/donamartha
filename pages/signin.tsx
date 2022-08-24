import { NextPage } from "next"

import { AllScreen, Button, MetaTags } from "@Components"
import Card, { CardFooter, CardHeader } from "components/card"
import Form, { Validations } from "components/form"
import InputText from "components/inputText/InputText"

import styles from 'styles/SignUp.module.css';

import { useState } from "react"
import { signInUser } from "@ServerAPI/client/auth"
import { useNotification } from "components/notification"
import Link from "next/link"
import { useRouter } from "next/router"

const validations: Validations = {
	email:[
		{
			message: "Este campo es requerido",
			validator: /^(?!\s*$).+/,
			type: "Error",
			onWriting: true,
		},
		{
			message: "El email no es valido",
			validator: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/,
			type: "Error",
			onWriting: false,
		}
	],
	password: [
		{
			message: "Este campo es requerido",
			validator: /^(?!\s*$).+/,
			type: "Error",
			onWriting: true,
		},
	],
}

interface FormValues {
	email: string;
	password: string;
}

const Signin:NextPage = () =>{
	const [loader, setLoader] = useState<boolean>(false);
	const notification = useNotification();
	const router = useRouter();

	const signInaUser = async (data: FormValues) => {
		setLoader(true);
		const {response, error} = await signInUser(data);
		if (response) {
			setLoader(false);
			router.push(`/profile`);
		}else if(error){
			setLoader(false);
			notification.addNotification({
				message: error.message,
				title: error.code,
				type: "error",
			})
		}
	}
	return (
		<>
			<MetaTags 
			description='Unete a nosotros, crea una cuenta y aprovecha los descuentos exclusivos que doña martha tiene para ti.'
			image="https://donamartha.com.mx/preview_page_menuasf12e4wfdasd.png"
			keyWorks={['Mariscos', "Relajante", "Restaurante", "Comida", "Bebidas", "Micheladas", "mojitos"]}
			title='Unete a nosotros'></MetaTags>
			<main className="h-screen flex justify-center items-start pt-16">
				<Card className="mb-20" header={ { align: "center", value: "Inicia Sesión"}}>
					<CardFooter>
						<h3>
							¿No tienes una cuenta?, 
							<Link href={"/signup"}>
								<a>Registrate aqui</a>
							</Link>
						</h3>
					</CardFooter>
					<h2>inicia con correo y contraseña</h2>
					<Form autoComplete="on" stopFirstError loader={loader}
						className={styles.form} validations={validations} 
						onSubmit={signInaUser}>
						<InputText border="normal" displayName="Correo Electronico" required name="email" type="email"
							placeholder="example@gmail.com" autoComplete="email" inputMode="email"></InputText>
						<InputText border="normal" displayName="Contraseña" autoComplete="current-password" required name="password" type="password"
							inputMode="text"></InputText>
						<Button className="border-full" type="submit" styleButton="blue" name="send"
							size="xl" value="Entra" loader={loader}></Button>
					</Form>
				</Card>
			</main>
		</>
	)
}

export default Signin