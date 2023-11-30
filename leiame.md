# backend utilizando node.js e mongodb

## instruções para inicializar o servidor:
iniciar com `npm run dev`
api em porta 3333 (http://localhost:3333)

## passos na execução do projeto

1) inicialiar o projeto com npm init
2) instalar: npm i express
3) instalar: npm i -g nodemon (servidor reiniciar automaticamente pós alteração no código)
4) instalar: npm i cors
5) setar configurações do .editorconfig
6) configurar eslint (npx eslint --init)
7) instalar prettier 
(npm i --save-dev eslint-plugin-prettier eslint-config-prettier)
(npm install --save-dev --save-exact prettier)
8) utilizar insomnia pra testar as requisições
9) criar arquivo de rotas na api (routes.js)
10) criação do banco mongodb utilizando o mongodb atlas database em "https://www.mongodb.com/atlas/database" 
database (api-todo)
username: shawwhip
password: FauWSTN1w535RkJb
string to connect: mongodb+srv://shawwhip:<password>@api-todo.cdxzivu.mongodb.net/?retryWrites=true&w=majority
11) instalar mongoose orm (npm i mongoose)
12) definir o model Note:
id
title
description
favorite
color
13) integrar chamadas com web
