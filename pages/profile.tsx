import { AllScreen, Button, NotFound } from "@Components";
import { BeakerIcon } from "@heroicons/react/solid";
import { signOutUser } from "@ServerAPI/client/auth";
import { useAppSelector } from "state/hooks/hooks";

import styles from './Profile.module.css';

const Profile = () =>{
	const user = useAppSelector((state)=>state.user);
	const closeSession = () =>{
		signOutUser();
	}
	if(!user) return <NotFound></NotFound>
	return (
		<AllScreen className="bg-slate-400">
			<div>Hola {}</div>
			<Button styleButton="blue" size="lg" onClick={closeSession} value="Cerrar sesion" iconL={<BeakerIcon height="25px"/>}></Button>
		</AllScreen>
	)
}                                                                                                             

export default Profile;