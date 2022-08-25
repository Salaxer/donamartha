import { AllScreen, BubbleImg, Button, Loader, MetaTags, NotFound } from "@Components";
import { LogoutIcon } from "@heroicons/react/solid";
import { signOutUser } from "@ServerAPI/client/auth";
import { useAppSelector } from "state/hooks/hooks";
import Image from 'next/image';

import styles from './Profile.module.css';
import { useRouter } from 'next/router';
import { NextPage } from "next";
import { useState } from "react";

interface DetailUser{
	saveFood: string[];
	delivery: string[];
	type: "user" | "admin";
	uid: string;
}

const Profile:NextPage = () =>{
	const [detailUser, setDetailUser] = useState<DetailUser | null>({ 
		saveFood: ["asd"], 
		delivery: ["sad"], 
		type: "user",
		uid: ""
	}); 

	const user = useAppSelector((state)=>state.user);
	const router = useRouter();
	const closeSession = () =>{
		signOutUser();
		router.push('/signin');
	}
	if(!user) return <NotFound></NotFound>
	if(!detailUser) return <Loader background="var(--background-w)" size="50px"></Loader>
	return (
		<>
			<MetaTags
				title="Perfil"
				description="Perfil del usuario"
				image=""
				keyWorks={["perfil", "usuario"]}/>
			<section className={styles.container}>
				<figure className={styles.container__img}>
					<BubbleImg alt={user.displayName || "user"} style={{padding: "1rem"}} image={user.photoURL ? user.photoURL : "https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/global%2FV1Artboard%201.png?alt=media&token=903f1125-87d1-4c25-a355-ba129aa75cbe"} priority />
				</figure>
				<h1 className={styles.name}>{user.displayName}</h1>
				{
					detailUser.saveFood.length > 0 && 
					<section className={styles.section}>
						<h2 className={styles.title}>Favoritos</h2>
					</section>
				}
				{
					detailUser.delivery.length > 0 && 
					<section className={styles.section}>
						<h2 className={styles.title}>Historial de pedidos</h2>
					</section> 
				}
				<Button styleButton="blue" size="lg" onClick={closeSession} value="Cerrar sesion" iconL={<LogoutIcon height="25px"/>}></Button>
			</section>
		</>
	)
}                                                                                                             

export default Profile;