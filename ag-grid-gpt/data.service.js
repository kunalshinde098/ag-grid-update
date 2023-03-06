const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

let data = [];

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.emit('data', data);

  setInterval(() => {
    data.push({
      id: data.length + 1,
      name: 'John Doe',
      age: Math.floor(Math.random() * 50) + 18,
      email: `johndoe${data.length + 1}@example.com`,
    });
    socket.emit('data', data);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
