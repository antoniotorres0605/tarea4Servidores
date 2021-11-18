let fs = require("fs");
let express = require("express");
let app = express()
const PORT = 5080;
let path = require("path");
let Contenedor = require("./contenedor")

let c1 = new Contenedor('./productos.txt')

app.get("/",(req,res)=>{
  res.send("Express online");
});

app.get("/productos",async(req,res)=>{
  const data = await c1.getAll();
  res.send(data);
});

app.get("/productoRandom",async(req,res)=>{
  const single = await c1.getAll();
  let num = parseInt(Math.random() * single.length);
  console.log(num)
  res.send(single[num]);
});

app.listen(PORT, ()=>{
  console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
})