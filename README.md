# Pruba tecnica Backend
 ## Este proyecto esta utilizando como motor de base de datos MSQL
 Puede copiar la estructura con sus respectivos registros(este procedimiento lo priorizo para que no haya problema con la conexion a la BD)

```sql
--
    CREATE database sinapsis;
    use sinapsis;

    CREATE TABLE categoria(
    id bigint primary key auto_increment not null,
    nombre varchar(50) NOT NULL,
    estado varchar(10) NOT NULL
    );

    insert into categoria values (default,'Laptops','A');
    insert into categoria values (default,'Monitores','A');

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
    insert into productos values(default,1,'Laptop asus corei 5','8gb ram 256gb almacenamiento',400.5,30,430.5,2,'A')
```
La configuracion con la conexion a la BD se encuetra en el archivo
```js
config.js
```

Una vez realizado lo anterior, el proyecto puede descargarlo o clonarlo, ejecutamos el siguiente comando en la terminal

```js
    npm i  //para instalar las dependencias
```
Una vez instalado  para levatar el proyecto ejecutamos
  ```js
    npm start  //para ejecutar el proyceto
```

Una vez realizado lo anterior, en el cliente REST pegamos la siguiente ruta(Tener en cuenta que el proyecto se esta ejecutando en el puerto 5003)
* Ruta para listar todos los productos
 ``` html

  http://localhost:5003/productos  //metodo GET
  ```
* Ruta para listar los productos por categoria (pasar el id de la categoria como parametro)
 ``` html
  http://localhost:5003/productos/1  //metodo GET
  ```
  * Ruta para agregar nuevos productos 
 ``` html
  http://localhost:5003/productos  //metodo POST
  ```
 ```js 
 //se debe ingresar un json con los siguientes elementos
    { 
        "categoria_id":1,
        "nombre":"pc",
        "descripcion":"pc",
        "precio_compra":4,
        "ganancia":4,
        "precio_venta":4,
        "stock":2,
        "estado":"A"
    }
 ```


  