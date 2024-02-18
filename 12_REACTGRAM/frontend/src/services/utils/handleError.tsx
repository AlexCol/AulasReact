export function handleError(error: any) {
	if (error.response && error.response.data) {
		const errorMessage = error.response.data;
		return { errorMessage };
	} else {
		console.log(error.message); // Caso não haja uma resposta de erro definida
		return { errorMessage: error.message };
	}
}