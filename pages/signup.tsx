import { NextPage } from "next"
import { useState } from "react"

import { AllScreen, Button, MetaTags } from "@Components"
import Card from "components/card"
import Form, { Validations } from "components/form"
import InputText from "components/inputText/InputText"

import styles from 'styles/SignUp.module.css';
import { useNotification } from "components/notification"
import { addUserWithEmailAndPassword } from "@ServerAPI/client/signup"


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
			addNotification({
				title: `Bienvenido ${data.name}`,
				message: `se ha enviado un correo de verificacion a ${response.user.email}`,
				type: "success",
				life: "infinite"
			});
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
					<Card header={ { align: "center", value: "Unete"}} footer="Hola como estas">
						<h2>Registrate con correo y contraseña</h2>
						<Form autoComplete="on" stopFirstError loader={loader}
							className={styles.form} validations={validations} 
							onSubmit={registerUser}>
							<InputText border="normal" displayName="Nombre" required name="name" type="text" 
								placeholder="Hector Salazar" inputMode="text"></InputText>
							<InputText border="normal" displayName="Correo Electronico" required name="email" type="email"
								placeholder="example@gmail.com" inputMode="email"></InputText>
							<InputText border="normal" displayName="Contraseña" required name="password" type="password"
								inputMode="text" autoComplete="current-password"></InputText>
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