import type { NextPage } from 'next'
import Head from 'next/head'

import { AllScreen } from '@Components'

const Delivery:NextPage = () => {
	return (
		<>
			<Head>
				<title>Doña Martha | Pedidos a domicilio</title>
				<meta name="description" content="Proximamente los Pedidos a domicilio, ordena la comida que gustes y llegara en un tiempo muy corto" />
				<link rel="icon" href="/favicon .ico" />
			</Head>
			<AllScreen>
					<h1 className='text-blue-600 text-4xl'>Proximamente</h1>
			</AllScreen>
		</>
	)
}

export default Delivery; 