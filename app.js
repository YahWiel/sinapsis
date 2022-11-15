import express from "express";
import conexion from "./DB/conexion.js";

const app =express();

app.use(express.json())

app.get("/",(req,res)=>{

    res.redirect("/getallproductos");
})
app.get("/productos",async(req,res)=>{
    try {
        let getall=await conexion.query(`SELECT * FROM productos p JOIN categoria c on p.categoria_id=c.id`);
        if(getall[0].length===0) return res.send({text:"No hay productos que mostrar"});
        
        return res.send(getall[0]);
    } catch (error) {
        return res.status(500).send({text:"ocurrio un error"})
    }
})
app.get("/productos/:id",async(req,res)=>{
    //let getProByCat=await conexion.query(`SELECT * FROM productos p JOIN categoria c on p.categoria_id=c.id WHERE c.id=(SELECT id FROM categoria where id=${id})`);   
    try {
        const {id}=req.params;
        let verifycat=await conexion.query(`SELECT * FROM categoria where id=${id}`);
        if(verifycat[0].length===0) return res.send("Esta categoria no existe");

        let getProByCat=await conexion.query(`SELECT * FROM productos p JOIN categoria c on p.categoria_id=c.id WHERE c.id=${id}`);      
         if(getProByCat[0].length===0) return res.send({text:"No hay productos que mostrar"});
        
        return res.send(getProByCat[0]); 
    } catch (error) {
        console.log(error);
        return res.status(500).send({text:"ocurrio un error"})
    }
})
app.post("/productos",async(req,res)=>{
    try {
        
        const{categoria_id,nombre,descripcion,precio_compra,ganancia,precio_venta,stock,estado}=req.body;
    
          if(!categoria_id||!nombre||!descripcion||!precio_compra||!ganancia||!precio_venta||!stock||!estado)  return res.send("ingrese datos");
            
        let save=await conexion.query(`insert into productos values(default,${categoria_id},'${nombre}','${descripcion}',${precio_compra},${ganancia},${precio_venta},${stock},'${estado}')`)
        if(save[0].affectedRows===0) return res.send("no se guardo el nuevoi producto");
        
        res.send("Producto creado");
    } catch (error) {
        console.log(error);
        return res.status(500).send({text:"ocurrio un error, asegurese que la categoria ingresada exista"})
    }
})
app.all("*",(req,res)=>{
    res.send("<h2>No existe la pagina que estas buscando</h2>");
})

app.listen(5003,()=>{
    console.log("corriendo");
})