var _config = require('../_config')
// Invocar el controlador
var mongoDB = require('mongodb');
// Crear el cliente
var MongoClient = mongoDB.MongoClient;

//creamos un objeto para ir almacenando todo lo que necesitemos
var modelo = {}

//obtener los productos por ID, Categoria y/o Descripción
modelo.get = function(id, callback) {
	MongoClient.connect(_config.url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err)
		} else {
			var collection = db.collection('posts_collection')
			var o_id = new mongoDB.ObjectID(id)
			//console.log(id)
			collection.find({post_author_id: o_id}).toArray(function (error, datos) {
				if(error) {
					console.log(error)
					callback(error, 409)
				} else {
					//console.log(datos)
					callback(null, datos)
				}
				//Close connection
				db.close()
			})
		}
	})
}

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = modelo