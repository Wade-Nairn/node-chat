$(function(){

	var socket = io.connect('http://localhost:9001');

	socket.on('welcome', function(data){
		console.log(data);
	});

	$('#form').submit(function(event){
		
		event.preventDefault();
		
		var message = $('#message').val();
		
		socket.emit('new_message', message);
		
		$('#message').val('');
	});

	socket.on('incoming_message', function(data){
		$('.messages').append('<li>'+data+'</li>');
	});

});