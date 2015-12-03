var express = require('express')
var vhost = require('vhost')

var server = express()

var api = require('./index.js')

server.use(vhost('armadillo.net', api))

server.listen(8081, function() {
	console.log('armadillo api rest :: 8081')
})
