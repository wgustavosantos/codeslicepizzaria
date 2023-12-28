#  ![UFPA](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyOqG3iMuzdu5X_KpvPiBXGXQ1I-LtBEgEQ&usqp=CAU)
# &nbsp;__Universidade Federal do Pará__
## TOPICOS ESPECIAIS EM DESENVOLVIMENTO PARA INTERNET - CodeSlice
### Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Java
- Node.js
- MySQL
- Git
  
Além disso, é necessário configurar as credenciais da Amazon S3 para o armazenamento de imagens. Consulte a documentação da AWS para mais informações.

### Configuração do Ambiente

1. Backend (Spring, MySQL)

Clone este repositório: git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do backend: cd backend
Configure o arquivo application.properties com suas credenciais do MySQL.
Execute o backend: ./mvnw spring-boot:run
Frontend (TypeScript, React)

Navegue até o diretório do frontend: cd frontend
Instale as dependências: npm install
Configure as variáveis de ambiente no arquivo .env (consulte .env.example para referência).
Inicie o frontend: npm start

### Estrutura do Projeto

- backend: Contém o código-fonte do backend desenvolvido em Spring.
- frontend: Contém o código-fonte do frontend desenvolvido em React com TypeScript.

### Tecnologias Utilizadas

- Backend:
  - Spring Boot: Framework Java para o desenvolvimento backend.
  - MySQL: Banco de dados relacional para armazenamento de dados.
  
- Frontend:
  - React: Biblioteca JavaScript para a construção de interfaces de usuário.
  - TypeScript: Superset do JavaScript que adiciona tipagem estática.
  - Amazon S3: Serviço de armazenamento em nuvem para o upload de imagens.
  
### Funcionalidades

### Em produção

### Autores
