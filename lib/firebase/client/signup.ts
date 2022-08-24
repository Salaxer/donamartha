import { createUser, sendVerification, signOutUser, updateUser } from "./auth";

interface FormValues {
	name: string;
	email: string;
	password: string;
}

// falta aqui
export const addUserWithEmailAndPassword = async ({ email, name, password }: FormValues) =>{
	const { response, error} = await createUser({ email, password });
	if (response) {
		signOutUser();
		await sendVerification(response.user);
		const nameUpdated = await updateUser({displayName: name})
		if (nameUpdated.error){
			return {
				response,
				error: nameUpdated.error,
			}	
		}
	}
	return { response, error}
}