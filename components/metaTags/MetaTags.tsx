import Head from 'next/head';

interface MetaTagsProp{
    title: string;
    description: string;
    image: string;
    keyWorks: string[];
}

/**
 * Only use in folder Pages
 * 
 */
const MetaTags = ({ title, description, image, keyWorks}:MetaTagsProp) =>{
	return (
		<Head >
			{/* Generals */}
			<title>{title} | Do&ntilde;a Martha</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keyWorks.toString()}/>
			<meta name="author" content="Salaxer" />
			{/* Twitter */}
			<meta name="twitter:image:src" content={image}/>
			<meta name="twitter:site" content="@salaxer1"/>
			<meta name="twitter:card" content="website"/>
			<meta name="twitter:title" content= {`${title} | Do&ntilde;a Martha`}/>
			<meta name="twitter:description" content={description}/>
			<meta name="twitter:creator" content="@Salaxer1" />
			<meta name="twitter:url" content="https://donamartha.com.mx" />
			{/* OG */}
			<meta property="og:site_name" content="Restaurante Do&ntilde;a Martha" />
			<meta property="og:type" content="website"/>
			<meta property="og:description" content={description}/>
			<meta property="og:image" content={image}/>
			<meta property="og:image:alt" content={`${title} | Do&ntilde;a Martha`}/>
			<meta property="og:url" content="https://donamartha.com.mx/"/>
			<meta property="og:title" content={title} />
		</Head>
	)
}

export default MetaTags;