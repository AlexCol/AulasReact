import express from 'express';
//import path from 'path';
//import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

//!pra isso funcionar, tem q ter o dotenv iniciado, e o arquivo deve estar na pasta raiz do projeto
const port = process.env.PORT || 3000;

const app = express();

//+ config json and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
  });