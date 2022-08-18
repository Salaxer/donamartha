import { Head, Html, Main, NextScript } from "next/document";
import React from "react";


const _document = () =>{
	return(
		<Html lang="es">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;900&display=swap" rel="stylesheet"></link>
			</Head>
			<body className="bg-blue-100">
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}

export default _document;