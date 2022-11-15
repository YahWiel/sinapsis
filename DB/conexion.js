import mysql from "mysql2/promise";
import {DB_HOST,DB_USER,DB_PASSWORD,DB_NAME,DB_PORT} from "../config.js"

let conexion= await mysql.createConnection({
    user:DB_USER,
    host:DB_HOST,
    password:DB_PASSWORD,
    database:DB_NAME,
    port:DB_PORT
});
  export default conexion;

  

/* 
  const mysql =require("mysql");
const {promisify} =require("util");

let conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'GOHComputer'
});

conexion.connect((err)=>{
    if(err) console.log("ocurrio un error al conectarce con la base de datos");
    else console.log("conexion exitosa");
})
conexion.query=promisify(conexion.query)
module.exports=conexion; */