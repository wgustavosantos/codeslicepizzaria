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

3. **Configure o arquivo ```application-dev.properties``` com suas credenciais do MySQL e AWS.**
```

ufpacodeslice.storage.s3.id-chave-acesso=
ufpacodeslice.storage.s3.chave-acesso-secreta=
ufpacodeslice.storage.s3.bucket=
ufpacodeslice.storage.s3.regiao=
ufpacodeslice.storage.s3.diretorio=
ufpacodeslice.storage.tipo-storage=

POPULE O BANCO DE DADOS

INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Pizza Bacon', 49.9, 'https://lafoca.s3.amazonaws.com/fotos/pizza_bacon.jpg', 'Pizza de bacon com mussarela, orégano, molho especial e tempero da casa.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Pizza Moda da Casa', 59.9, 'https://lafoca.s3.amazonaws.com/fotos/pizza_moda.jpg', 'Pizza à moda da casa, com molho especial e todos ingredientes básicos, e queijo à sua escolha.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Pizza Portuguesa', 45.0, 'https://lafoca.s3.amazonaws.com/fotos/pizza_portuguesa.jpg', 'Pizza Portuguesa com molho especial, mussarela, presunto, ovos e especiarias.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Risoto de Carne', 52.0, 'https://lafoca.s3.amazonaws.com/fotos/risoto_carne.jpg', 'Risoto de carne com especiarias e um delicioso molho de acompanhamento.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Risoto Funghi', 59.95, 'https://lafoca.s3.amazonaws.com/fotos/risoto_funghi.jpg', 'Risoto Funghi feito com ingredientes finos e o toque especial do chef.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Macarrão Espaguete', 35.9, 'https://lafoca.s3.amazonaws.com/fotos/macarrao_espaguete.jpg', 'Macarrão fresco espaguete com molho especial e tempero da casa.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Macarrão Fusili', 38.0, 'https://lafoca.s3.amazonaws.com/fotos/macarrao_fusili.jpg', 'Macarrão fusili com toque do chef e especiarias.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Macarrão Penne', 37.9, 'https://lafoca.s3.amazonaws.com/fotos/macarrao_penne.jpg', 'Macarrão penne fresco ao dente com tempero especial.');

INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', '2021-01-01 10:00:00');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -22.946779, -43.217753, 'Avenida Paulista, 1500', '2021-01-01 15:00:00');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -25.439787, -49.237759, 'Avenida Paulista, 1500', '2021-01-01 16:00:00');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', '2021-01-01 12:00:00');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -23.561680, -46.656139, 'Avenida Paulista, 1500', '2021-01-01 08:00:00');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', '2021-01-01 14:00:00');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', '2021-01-01 09:00:00');

INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 8);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 3);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 7);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 5);
```
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
