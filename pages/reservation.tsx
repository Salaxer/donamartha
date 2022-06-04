import type { NextPage } from 'next'
import Head from 'next/head'

import { AllScreen } from '@Components'

const Reservation:NextPage = () => {
    return (
        <>
            <Head>
                <title>Doña Martha | Reservaciones</title>
                <meta name="description" content="Proximamente las Reservaciones en el restaurante, puede consultar fechas o llamar para una mejor atencion" />
                <link rel="icon" href="/favicon .ico" />
            </Head>
            <AllScreen>
                <h1 className='text-blue-600 text-4xl'>Proximamente</h1>
            </AllScreen>
        </>
    )
}

export default Reservation; 