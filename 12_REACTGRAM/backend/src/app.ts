import express from 'express';
import path from 'path';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './routes/routes';
import db from './config/db';
dotenv.config();

//!pra isso funcionar, tem q ter o dotenv iniciado, e o arquivo deve estar na pasta raiz do projeto
const port = process.env.PORT || 3000;

//!iniciando a construção do app
const app = express();

//!ativando cors
app.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}));

//!definindo diretorio de uploads(criando o controller pra recuperar as fotos)
app.use('/uploads', express.static(path.join(__dirname, "/uploads")));

//!DB connection
//+realizada configuração no arquivo ./config/db.ts
//+realizada improtação, import db from './config/db';
//+realizada a chamada para conexão ao banco em 'listen'

//!config json and form data response DEVE SER INFORMADO ANTES DE PARAMETRIZAR AS ROTAS
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//!informando o caminho inicial das rotas
app.use('/api', router);

//!iniciando aplicação
app.listen(port, async () => {
	await db();
	console.log(`Server is running on port ${port}`);
  });