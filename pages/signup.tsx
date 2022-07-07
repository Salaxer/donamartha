import { AllScreen, MetaTags } from "@Components"
import { Card } from "components/card"
import { NextPage } from "next"


const SignUp:NextPage = () =>{
    return (
        <>
            <MetaTags 
            description='Unete a nosotros, crea una cuenta y aprobecha los descuentos exclusivos que doña martha tiene para ti.'
            image={'/preview_page_menuasf12e4wfdasd.png'}
            keyWorks={['Mariscos', "Relajante", "Restaurante", "Comida", "Bebidas", "Micheladas", "mojitos"]}
            title='Unete a nosotros'></MetaTags>
            <main>
                <AllScreen className="bg-blue-100">
                    <Card header={ { align: "right", value: "Salaxer"}}>
                        <form action="">
        
                        </form>
                        
                    </Card>
                </AllScreen>
            </main>
        </>
    )
}

export default SignUp