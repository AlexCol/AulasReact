/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ iniciando projeto
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//!para inciar e criar a package.json (-y para não precisar responder questões e ele criar padrão)
//npm init -y 

//!para criar o tsconfig.json e iniciar o 'typescript'
//npx tsc --init

//!para manipulação de senhas (encript)
//npm i bcryptjs
//npm install @types/bcryptjs --save-dev

//!para carregar variáveis de ambiente de um arquivo .env
//npm i dotenv
//npm install @types/dotenv --save-dev

//!para instalar o express (criação de aplicativos da web e APIs)
//npm install express
//npm install @types/express @types/node ts-node-dev typescript --save-dev

//!criar uma camada middleware para validações
//npm install express-validator
//npm install @types/express-validator --save-dev

//!para uso do jwt
//npm install jsonwebtoken
//npm install @types/jsonwebtoken --save-dev

//!para uso do cors
//npm install cors
//npm install @types/cors --save-dev

//!para acesso ao mongodb
//npm install mongoose
//npm install @types/mongoose --save-dev

//!para acesso ao multer(upload de imagens)
//npm install multer
//npm install @types/multer --save-dev

//!monitoramento de ajustes e reinicio automatico de servidor
//npm install nodemon --save-dev

//!criado no arquivo package.json, abaixo de test (com isso pode-se rodar a aplicação com 'npm run dev'):
//"dev": "ts-node-dev --respawn --transpile-only src/app.ts"=