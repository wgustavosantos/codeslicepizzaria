<div style="text-align:center">
  
#  ![UFPA](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyOqG3iMuzdu5X_KpvPiBXGXQ1I-LtBEgEQ&usqp=CAU)

</div>

# **Universidade Federal do Pará**
## TÓPICOS ESPECIAIS EM DESENVOLVIMENTO PARA INTERNET – CodeSlice

 A CodeSlice Pizzaria é um projeto que simula um sistema de pizzaria, no qual o usuário-cliente é capaz de fazer pedidos, enquanto o usuário-administrador é capaz de de criar opções de pizzas, visualizar pedidos e alterar status de pedidos, alternando entre pedidos "pendentes" e "entregues".
### Tecnologias Utilizadas

- **Backend:**
  - Spring Boot: Framework Java para o desenvolvimento backend.
  - MySQL: Banco de dados relacional para armazenamento de dados.
  - Amazon S3: Serviço de armazenamento em nuvem para o upload de imagens.
  - Arquitetura de camadas, api rest usando json.
  
- **Frontend:**
  - React: Biblioteca JavaScript para a construção de interfaces de usuário.
  - TypeScript: Superset do JavaScript que adiciona tipagem estática.
  - mapbox para buscar endereços

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
  
### Funcionalidades
- Home
  ![desktop-home](https://github.com/GustavoSC1/dsdeliver/assets/77124683/4928b25a-8a8b-4fcc-ac37-9f7c301b4232)
- Efetuar pedidos
    ![desktop-fazer-pedido](https://github.com/GustavoSC1/dsdeliver/assets/77124683/9855a1ee-3f76-4aa3-9091-3399edfa7870)
- Área de administrador
  ![desktop-area-admin](https://github.com/GustavoSC1/dsdeliver/assets/77124683/ce8c0c95-e480-48cd-b926-5e7836e7f2af)
- Cadastro de pizzas
  ![desktop-cadastro-pizza](https://github.com/GustavoSC1/dsdeliver/assets/77124683/41b67e3c-d780-4583-ba9f-037021529dd6)
  
- Listagem de pedidos
  
  ![desktop-lista-pedidos](https://github.com/GustavoSC1/dsdeliver/assets/77124683/0d71170c-084f-42fd-8103-8afc249537cf)

- Home (responsivo)
  
  ![mobile](https://github.com/GustavoSC1/dsdeliver/assets/77124683/3a1841fa-8f7e-4f51-a5bf-451a503924fd)
- Efetuar pedidos(responsivo)
  
![mobile (1)](https://github.com/GustavoSC1/dsdeliver/assets/77124683/43113049-f0d8-413b-b520-be9eb1a5c04b)


### Autores

Leandro Veloso dos Santos <br>
Taylor Costa Alves <br>
Wenderson Gustavo Silva dos Santos <br>
