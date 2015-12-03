var _config = require('../_config')
//Ini
var mongoose = require('mongoose')
//Lets connect to our database using the DB server URL.
mongoose.connect(_config.url)

module.exports = mongoose