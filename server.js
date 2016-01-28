
var chalk = require('chalk');
var express = require('express');
var io = require('socket.io')();




var app = express();

app.listen(9000);
io.listen(9001);

app.use(express.static('./public'));

console.log(chalk.yellow.bold.bgBlue('Chat server running at http://localhost:9000'));
console.log(new Date());

io.on('connection', function(socket){

	console.log('Connection -', socket.id);
	socket.emit('welcome', 'Hi');

	socket.on('new_message', function(data){
		io.emit('incoming_message', data);		
	});
});
