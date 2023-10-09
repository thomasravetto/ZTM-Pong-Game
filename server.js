const http = require('http');
const io = require('socket.io');

const apiServer = require('./api')
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
    cors: {
      origin: 'http://localhost:3501',
      methods: ['GET', 'POST']
    }
  });

const sockets = require('./sockets')

const PORT = 3500;

httpServer.listen(PORT);
console.log('Listening on port:', PORT);

sockets.listen(socketServer);
