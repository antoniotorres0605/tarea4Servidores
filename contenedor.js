//@Autor: Antonio Torres
//@Fecha: 10/11/2021

let fs = require("fs");
let path = require("path");

class Contenedor{
  constructor(archivo){
    this.archivo = archivo;
  }

  // Función que permite guardar nuevos objetos

  async getAll() {
    try {
        let all = await fs.promises.readFile(this.archivo, `utf-8`);
        let arr = JSON.parse(all);
        this.arreglo = arr;
        return (arr);
    }
    catch (error) {
        console.log('No se pudo leer el archivo',error);
    }
  }
}

module.exports = Contenedor