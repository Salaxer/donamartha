import { Button } from "@Components";
import Image from "next/image";
import { useRouter } from "next/router";


const FindUs = () =>{
    const router = useRouter();
    const goDelivery = () =>{
        router.push('/delivery')
    }
    return (
        <div className="w-full h-ful flex justify-between items-center flex-col md:flex-row">
            <div className="m-5 text-center w-full">
               <h1 className="text-6xl font-bold m-10">Encuentranos</h1>
                <p className="text-2xl">Nos ubicamos en Atlacholoaya Xochitepec Morelos</p>
            </div>
            <div className="flex w-full p-5 flex-col items-center gap-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.999552093823!2d-99.21020904901123!3d18.775867956896956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee1ce55e86f27d47!2sMicheladas%20Do%C3%B1a%20Martha!5e0!3m2!1sen!2smx!4v1656824019621!5m2!1sen!2smx"
                width="100%" height="400"
                style={{borderRadius: '2.5rem',  overflow: 'hidden'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="flex flex-col items-center justify-center ">
                    <Button value="Ir a Pedidos" size="xl" styleButton="success" ripple onClick={goDelivery}></Button>
                </div>
            </div>
        </div>
    )
}
export default FindUs;