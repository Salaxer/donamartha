
export const noData = (value:string, field: boolean):Error => {
	if (!field) return{
		message: "No exist the body on the request",
		name: "No data",
	}
	return{
		message: `Falta el campo ${value} en la peticion`,
		name: "There is not data",
	}
}

export const serverError = (e:any) =>{
	return e instanceof Error ? e : {
		name:"Error deconocido",
		message: "Se ha producido un error desconocido, por favor intenta mas tarde",
	}
}