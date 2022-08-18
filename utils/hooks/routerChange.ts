import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useRouterChange = () =>{
	const router = useRouter();
	const [ loading, setLoading ] = useState(false);
	
	useEffect(()=>{
		const handleStart = () => {
			setLoading(true)
		};
		const handleComplete = () => {
			setTimeout(()=> {
				setLoading(false)
			}, 1000)
		};
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
		return ()=>{
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);	
		}
	}, [router.asPath, router.events])

	return loading;
}

export default useRouterChange;