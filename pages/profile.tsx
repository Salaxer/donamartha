import { AllScreen, Button, NotFound } from "@Components";
import { LogoutIcon } from "@heroicons/react/solid";
import { signOutUser } from "@ServerAPI/client/auth";
import { useAppSelector } from "state/hooks/hooks";
import Image from 'next/image';

import styles from './Profile.module.css';
import { useRouter } from 'next/router';
import { NextPage } from "next";

const Profile:NextPage = () =>{
	const user = useAppSelector((state)=>state.user);
	const router = useRouter();
	const closeSession = () =>{
		signOutUser();
		router.push('/signin');
	
	}
	if(!user) return <NotFound></NotFound>
	return (
		<section className={styles.container}>
			{/* <Image src="asdas" alt="" height={100} width={100}/> */}
			<div>Hola {user.displayName}</div>
			<Button styleButton="blue" size="lg" onClick={closeSession} value="Cerrar sesion" iconL={<LogoutIcon height="25px"/>}></Button>
		</section>
	)
}                                                                                                             

export default Profile;