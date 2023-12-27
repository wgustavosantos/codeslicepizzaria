# CREATE TABLE tb_product (
#                             id INT AUTO_INCREMENT PRIMARY KEY,
#                             name VARCHAR(255) NOT NULL,
#                             price DECIMAL(10, 2) NOT NULL,
#                             image_Uri VARCHAR(255),
#                             description TEXT
# );
#
# CREATE TABLE tb_order (
#                           id INT AUTO_INCREMENT PRIMARY KEY,
#                           status INT NOT NULL,
#                           latitude DECIMAL(10, 6) NOT NULL,
#                           longitude DECIMAL(10, 6) NOT NULL,
#                           address VARCHAR(255) NOT NULL,
#                           moment DATETIME NOT NULL
# );
#
# CREATE TABLE tb_order_product (
#                                   id INT AUTO_INCREMENT PRIMARY KEY,
#                                   order_id INT NOT NULL,
#                                   product_id INT NOT NULL,
#                                   FOREIGN KEY (order_id) REFERENCES tb_order(id),
#                                   FOREIGN KEY (product_id) REFERENCES tb_product(id)
# );

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