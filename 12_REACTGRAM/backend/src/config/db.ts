import mongoose from "mongoose";

export default async function conn() {
	const dbUser = process.env.MONGOOSE_USER || '';
	const dbPass = process.env.MONGOOSE_PASS || '';
	
	//!para escolher qual o banco usar, e não criar um 'test', especificar na conection string, após o '.net' o nome do banco
	const connString = process.env.MONGOOSE_CONN_STRING?.replace("<user>", dbUser).replace("<pass>", dbPass) || '';

	try {
		const dbConn = await mongoose.connect(connString);
		console.log("conectou");
		return dbConn;
	} catch (error: any) {
		console.log(error.message);
	}
};