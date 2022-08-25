import { Head, Html, Main, NextScript } from "next/document";
import React from "react";


const _document = () =>{
	return(
		<Html lang="es">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;900&display=swap" rel="stylesheet"></link>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
				<meta name="application-name" content="Do&ntilde;a Martha" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Do&ntilde;a Martha" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#0b3247" />
				<meta name="msapplication-tap-highlight" content="no" />

				<link rel="icon" href="/favicon .ico" /> 
				<meta name="theme-color" content="#0b3247" />
				<meta charSet="utf-8" />
				<meta httpEquiv="Content-Language" content="es"/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon .ico" />
			</Head>
			<body className="bg-blue-100">
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}

export default _document;