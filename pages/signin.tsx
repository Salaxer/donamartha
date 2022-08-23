import { NextPage } from "next"

import { AllScreen, Button, MetaTags } from "@Components"
import Card from "components/card"
import Form, { Validations } from "components/form"
import InputText from "components/inputText/InputText"

import styles from 'styles/SignUp.module.css';

import { useState } from "react"
import { signInUser } from "@ServerAPI/client/auth"
import { useNotification } from "components/notification"

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
	const signInaUser = async (data: FormValues) => {
		setLoader(true);
		const {response, error} = await signInUser(data);
		if (response) {
			setLoader(false);
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
			<main>
				<AllScreen>
					<Card header={ { align: "center", value: "Inicia Sesión"}}>
						<h2>inicia con correo y contraseña</h2>
						<Form autoComplete="on" stopFirstError loader={loader}
							className={styles.form} validations={validations} 
							onSubmit={signInaUser}>
							<InputText border="normal" displayName="Correo Electronico" required name="email" type="email"
								placeholder="example@gmail.com" inputMode="email"></InputText>
							<InputText border="normal" displayName="Contraseña" required name="password" type="password"
								inputMode="text"></InputText>
							<Button type="submit" styleButton="blue" name="s"
								size="lg" value="Entrar" loader={loader}></Button>
						</Form>
					</Card>
				</AllScreen>
			</main>
		</>
	)
}

export default Signin