var express = require('express')
var bodyPaser = require('body-parser')
var vhost = require('vhost')

var servidor = express()

servidor.use(bodyPaser.json())

//Headers soportados por la aplicación
servidor.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization,  X-Access-Token, X-Key, X-Requested-With")
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	res.set('Content-Type', 'controllication/json')
	if (req.method == 'OPTIONS') {
		res.status(200).end() //Para el soporte de CORS
	} else {
		next()
  }
})

//Rutas disponibles
servidor.use('/', require('./_rutas'))

//Si la ruta no se procesó lanzar error 404
servidor.use(function(req, res, next) {
  var err = new Error('Ruta no encontrada')
  err.status = 404
  next(err)
})

console.log("armadillo")

//Prueba directa
//servidor.listen(8081, function() {
//	console.log('api en puerto 8081')
//})

module.exports = servidor