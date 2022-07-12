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
                        <Form className={styles.form} validations={validations} onSubmit={(data) =>alert(data.name)}>
                            <InputText required name="name" type="text" placeholder="Name" ></InputText>
                            <InputText required name="email" type="email" placeholder="Email"></InputText>
                            <Button 
                                type="submit" 
                                styleButton="blue" 
                                name="AMAMA" 
                                ripple
                                size="lg"
                                value="Send">
                            </Button>
                        </Form>
                    </Card>
                </AllScreen>
            </main>
        </>
    )
}

export default SignUp