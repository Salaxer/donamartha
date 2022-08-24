import { useEffect } from 'react'

import initFirebase from '@ServerAPI/firebase.init'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { createUser, deleteUser } from 'state/features/user'

import { useAppDispatch, useAppSelector } from 'state/hooks/hooks'

const ObserverUSer = () =>{
	const dispatch = useAppDispatch();
	useEffect(()=>{
		initFirebase();
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const { displayName, email, emailVerified, phoneNumber, photoURL, uid } = user;
				
				dispatch(createUser({ 
					displayName, email, emailVerified, phoneNumber, photoURL, uid
				}))
				// ...
			} else {
				dispatch(deleteUser());
			}
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[dispatch]);
	return <></>
}

export default ObserverUSer;