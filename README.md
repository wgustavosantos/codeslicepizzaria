<div style="text-align:center">
  
#  ![UFPA](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyOqG3iMuzdu5X_KpvPiBXGXQ1I-LtBEgEQ&usqp=CAU)

</div>

# **Universidade Federal do Pará**
## TÓPICOS ESPECIAIS EM DESENVOLVIMENTO PARA INTERNET – CodeSlice
### Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
<br>
- [Java](https://www.oracle.com/br/java/technologies/downloads/)
- [Node.js](https://nodejs.org/en)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Git](https://git-scm.com/)
  
Além disso, é necessário configurar as credenciais da **Amazon S3** para o armazenamento de imagens. Consulte a documentação da [AWS](https://docs.aws.amazon.com/) para mais informações.

### Configuração do Ambiente

#### Backend (Spring, MySQL)

1. **Clone este repositório:**
```bash
git clone https://github.com/wgustavosantos/codeslicepizzaria.git
```
2. **Navegue até o diretório do backend:**
```bash
cd backend
```

3. **Configure o arquivo ```application.properties``` com suas credenciais do MySQL.**

4. **Execute o backend:**
```bash
./mvnw spring-boot:run
```
#### Frontend (TypeScript, React)

1. **Navegue até o diretório do frontend:**
```bash
cd frontend
```
2. **Instale as dependências:**
```bash
npm install
```
3. **Configure as variáveis de ambiente no arquivo ```.env``` (consulte .env.example para referência).**

4. **Inicie o frontend:**
```bash
npm start
```

### Estrutura do Projeto

- **Backend:** Contém o código-fonte do backend desenvolvido em Spring.
- **Frontend:** Contém o código-fonte do frontend desenvolvido em React com TypeScript.

### Tecnologias Utilizadas

- **Backend:**
  - Spring Boot: Framework Java para o desenvolvimento backend.
  - MySQL: Banco de dados relacional para armazenamento de dados.
  - Amazon S3: Serviço de armazenamento em nuvem para o upload de imagens.
  
- **Frontend:**
  - React: Biblioteca JavaScript para a construção de interfaces de usuário.
  - TypeScript: Superset do JavaScript que adiciona tipagem estática.
  
  
### Funcionalidades

### Autores

Leandro Veloso dos Santos <br>
Taylor Costa Alves <br>
Wenderson Gustavo Silva dos Santos <br>
