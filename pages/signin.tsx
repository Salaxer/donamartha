import { NextPage } from "next"

import { AllScreen, Button, MetaTags } from "@Components"
import Card from "components/card"
import Form, { Validations } from "components/form"
import InputText from "components/inputText/InputText"

import styles from 'styles/Signup.module.css';

import { newUser } from '@ServerAPI/client/auth';
import { useState } from "react"

const validations: Validations = {
    name: [
        {
            message: "Este campo es requerido",
            regex: /^(?!\s*$).+/,
            type: "Error",
            onWriting: true,
        },
    ],
    email:[
        {
            message: "Este campo es requerido",
            regex: /^(?!\s*$).+/,
            type: "Error",
            onWriting: true,
        },
        {
            message: "El email no es valido",
            regex: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/,
            type: "Error",
            onWriting: false,
        }
    ],
    password: [
        {
            message: "Este campo es requerido",
            regex: /^(?!\s*$).+/,
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

const Signin:NextPage = () =>{

    const [loader, setLoader] = useState<boolean>(false);
    
    const registerUser = async (data: FormValues) => {
        setLoader(true);
        const user = await newUser(data);
        if (user.response) {
            console.log(user.response);
            setLoader(false);
        }else{
            console.log(user.error);
            setLoader(false)
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
                        <h2>Registrate con correo y contraseña</h2>
                        <Form autoComplete="on" stopFirstError loader={loader}
                            className={styles.form} validations={validations} 
                            onSubmit={registerUser}>
                            <InputText border="normal" displayName="Nombre" required name="name" type="text" 
                                placeholder="Hector Salazar" inputMode="text"></InputText>
                            <InputText border="normal" displayName="Correo Electronico" required name="email" type="email"
                                placeholder="example@gmail.com" inputMode="email"></InputText>
                            <InputText border="normal" displayName="Contraseña" required name="password" type="password"
                                inputMode="text"></InputText>
                            <Button type="submit" styleButton="blue" name="s"
                                size="lg" value="Confirmar" loader={loader}></Button>
                        </Form>
                    </Card>
                </AllScreen>
            </main>
        </>
    )
}

export default Signin