var socket = io();

// escuchar info
socket.on('connect', function () {
    console.log('conectado al servidor')
});

socket.on('disconnect', function () {
    console.log('Conexion perdida');
});

socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje)
});

// enviar info
socket.emit('enviarMensaje', {
    usuario: 'Paulo',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log(resp)
});