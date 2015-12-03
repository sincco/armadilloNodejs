/************************************
* Definición de rutas válidas				*
*************************************/
var app = require('express')
var ruteador = app.Router()

var _posts = require('../_controladores/posts.js')

//*****Publicas
ruteador.get('/publico/posts/:id', _posts.getPost) //Regresa un articulo
//ruteador.get('/publico/posts/:usuario', _articulos.getEtiqueta) //Regresar los articulos bajo cierta etiqueta

module.exports = ruteador