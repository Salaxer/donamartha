import { createUser, sendVerification, signOutUser, updateUser } from "./auth";

interface FormValues {
	name: string;
	email: string;
	password: string;
}

export const addUserWithEmailAndPassword = async ({ email, name, password }: FormValues) =>{
	const { response, error} = await createUser({ email, password });
	if (response) {
		await sendVerification(response.user);
		const nameUpdated = await updateUser({displayName: name})
		signOutUser();
		if (nameUpdated.error){
			return {
				response,
				error: nameUpdated.error,
			}	
		}
	}
	return { response, error}
}