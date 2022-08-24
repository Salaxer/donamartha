import { NextPage } from "next"
import { useState } from "react"

import { AllScreen, Button, MetaTags } from "@Components"
import Card, { CardFooter } from "components/card"
import Form, { Validations } from "components/form"
import InputText from "components/inputText/InputText"

import styles from 'styles/SignUp.module.css';
import { useNotification } from "components/notification"
import { addUserWithEmailAndPassword } from "@ServerAPI/client/signup"
import Link from "next/link"
import { useRouter } from "next/router"


const validations: Validations = {
	name: [
		{
			message: "Este campo es requerido",
			// validator: /^(?!\s*$).+/,
			validator: (value) => !value,
			type: "Error",
			onWriting: true,
		},
	],
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
	name: string;
	email: string;
	password: string;
}

const SignUp:NextPage = () =>{

	const [loader, setLoader] = useState<boolean>(false);
	const { addNotification } = useNotification();
	const router = useRouter();

	const registerUser = async (data: FormValues) =>{
		setLoader(true);
		const { response, error } = await addUserWithEmailAndPassword(data);
		if (error) {
			setLoader(false);
			addNotification({
				message: error.message,
				title: error.code,
				type: "error",
				life: "infinite"
			});
		}else if(response){
			setLoader(false);
			router.push(`/emailsended?id=${response.user.uid}`);
		}
	}
	
	return (
		<>
			<MetaTags 
			description='Unete a nosotros, crea una cuenta y aprobecha los descuentos exclusivos que doña martha tiene para ti.'
			image="https://donamartha.com.mx/preview_page_menuasf12e4wfdasd.png"
			keyWorks={['Mariscos', "Relajante", "Restaurante", "Comida", "Bebidas", "Micheladas", "mojitos"]}
			title='Unete a nosotros'></MetaTags>
			<main>
				<AllScreen>
					<Card header={ { align: "center", value: "Unete"}}>
						<CardFooter>
							<h3> ¿Ya tienes una cuenta?, 
								<Link href={"/signin"}>
									<a>Inicia Sesion aqui</a>
								</Link>
							</h3>
						</CardFooter>
						<h2>Registrate con correo y contraseña</h2>
						<Form autoComplete="on" stopFirstError loader={loader}
							className={styles.form} validations={validations} 
							onSubmit={registerUser}>
							<InputText border="normal" displayName="Nombre" required name="name" type="text" 
								placeholder="Hector Salazar" autoComplete="" inputMode="text"></InputText>
							<InputText border="normal" displayName="Correo Electronico" required name="email" type="email"
								placeholder="example@gmail.com" autoComplete="username" inputMode="email"></InputText>
							<InputText border="normal" displayName="Contraseña" required name="password" type="password"
								inputMode="text" autoComplete="new-password"></InputText>
							<Button type="submit" styleButton="blue" name="sss"
								size="lg" value="Confirmar" loader={loader}></Button>
						</Form>
					</Card>
				</AllScreen>
			</main>
		</>
	)
}

export default SignUp