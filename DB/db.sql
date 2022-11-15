CREATE database sinapsis;
use sinapsis;

CREATE TABLE categoria(
  id bigint primary key auto_increment not null,
  nombre varchar(50) NOT NULL,
  estado varchar(10) NOT NULL
  );

CREATE TABLE productos (
  id bigint primary key auto_increment not null,
  categoria_id bigint NOT NULL,
  nombre varchar(50) NOT NULL,
  descripcion varchar(100) DEFAULT NULL,
  precio_compra float NOT NULL,
  ganancia float NOT NULL,
  precio_venta float NOT NULL,
  stock int NOT NULL,
  estado varchar(10) NOT NULL,
  FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);