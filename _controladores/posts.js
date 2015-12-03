var _modelo = require('../_modelos/posts.js')
var control = {}

//Devuelve un post
control.getPost = function(req, res, next) {
	_modelo.get(req.params.id, function(error,datos) {
		if(error) {
			res
				.status(datos)
				.json({})
			return false
		} else {
			res
				.status(200)
				.json(datos)
			return true
		}
	})
}

module.exports = control