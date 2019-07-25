const { io } = require('./../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'ADMIN',
        mensaje: 'Bienvenido a la app'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        client.broadcast.emit('enviarMensaje', data);
    });
});