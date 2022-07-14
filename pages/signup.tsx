import { NextPage } from "next"
import { AllScreen, Button, MetaTags } from "@Components"
import Card from "components/card"
import Form, { Validations } from "components/form"
import InputText from "components/inputText/InputText"

import styles from 'styles/SignUp.module.css';

const validations: Validations = {
    name: [
        {
            message: "Este Campo es requerido",
            regex: /^(?!\s*$).+/,
            type: "Error",
            onWriting: true,
        },
    ],
    email:[
        {
            message: "Este Campo es requerido",
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
}

const SignUp:NextPage = () =>{
    return (
        <>
            <MetaTags 
            description='Unete a nosotros, crea una cuenta y aprobecha los descuentos exclusivos que doña martha tiene para ti.'
            image={'/preview_page_menuasf12e4wfdasd.png'}
            keyWorks={['Mariscos', "Relajante", "Restaurante", "Comida", "Bebidas", "Micheladas", "mojitos"]}
            title='Unete a nosotros'></MetaTags>
            <main>
                <AllScreen>
                    <Card header={ { align: "center", value: "Unete"}}>
                        <h1>Registrate con correo y contraseña</h1>
                        <Form stopFirstError className={styles.form} validations={validations} onSubmit={(data) =>console.log(data)}>
                            <InputText border="none" displayName="Nombre" required name="name" type="text" 
                                placeholder="Hector Salazar" size={12} inputMode="text"></InputText>
                            <InputText border="normal" displayName="Correo Electronico" required name="email" type="email"
                                placeholder="example@gmail.com" inputMode="email"></InputText>
                            <InputText border="full" displayName="Contraseña" required name="Phone" type="password"
                                placeholder="7002273212" inputMode="text"></InputText>
                            <Button type="submit" styleButton="blue" name="AMAMA" ripple
                                size="lg" value="Confirmar"></Button>
                        </Form>
                    </Card>
                </AllScreen>
            </main>
        </>
    )
}

export default SignUp