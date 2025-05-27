# Descrição do Projeto

Este projeto é uma aplicação de gerenciamento de livros desenvolvida com Node.js, Express e MongoDB. Ele oferece uma API RESTful para cadastro, listagem e exclusão de livros, além de uma interface web simples utilizando EJS para visualização. O backend está estruturado seguindo o padrão MVC, com rotas organizadas, modelos de dados utilizando Mongoose e integração com banco de dados MongoDB.

## Funcionalidades

- Listagem de livros cadastrados
- Cadastro de novos livros
- Exclusão de livros existentes
- API pronta para integração com frontends em Angular, React e Next.js (presentes na pasta [Livros](vscode-file://vscode-app/c:/Users/Azedin/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html))
- Middleware de CORS habilitado para facilitar o desenvolvimento de aplicações frontend separadas

## Estrutura

- **models/** : Modelos e conexão com o banco de dados MongoDB
- **routes/** : Rotas da API e da interface web
- **views/** : Templates EJS para renderização do frontend
- **public/** : Arquivos estáticos (CSS, imagens, JS)
- **Livros/** : Exemplos de frontends em diferentes frameworks

## Como executar

1. Instale as dependências:

   **npm install**

2. npm start
3. Acesse a aplicação em [http://localhost:3030](vscode-file://vscode-app/c:/Users/Azedin/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
