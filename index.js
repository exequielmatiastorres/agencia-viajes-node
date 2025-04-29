import express from 'express';
import router from './routes/index.js'
import db from './config/db.js';


const app = express();

// Conectar a la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log('error'))

// Definir puerto
const port = process.env.PORT || 3000;

//Habilitar PUG
app.set('view engine', 'pug') //habilita pug

//creando nuestro propio middleware
//obtener el año actual
app.use((req, res, next)=> {
    const year = new Date();
    res.locals.actualYear= year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes"
    next(); //provoca que siga al siguiente middleware - podemos forzarlo en caso que se quede atorado con return next();
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica
app.use(express.static('public')) //forma de añadir los archivos publicos estaticos en express

//Agregar router
app.use('/', router) //soporta todos los verbos, agrega todas las rutas - el siguiente codigo indica que desde la pagina principal, agrega todos los router.


app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})


//REQ - PETICION : RES - LO QUE EXPRESS NOS RESPONDE
//send se utiliza para mostrar algo en pantalla
//json para mostrar un objeto json
//render para mostrar una vista





//// SINTAXIS DE COMMNJS

// const express = require('express');
// const app = express();
// // Definir puerto
// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//     console.log(`El Servidor esta funcionando en el puerto ${port}`)
// })

//middleware: 