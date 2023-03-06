const express = require('express');
const http = require('http');
var cors = require('cors');
const socketIo = require('socket.io');

const app = express();
app.use(cors({
  origin: '*'
}));
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
      message: 'Hello World'
  });
});

let data = [];

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.emit('data', data);

  setInterval(() => {
    griddata  = {
      make: Math.floor(Math.random() * 30 ) + 56 ,
      model: 'Celica '+Math.floor(Math.random() * 50) + 12,
      price: Math.floor(Math.random() * 50) 
    }
    //{ make: "Toyota", model: "Celica", price: 35000 },
    data.push(griddata);
    //console.log(griddata);
   
    socket.emit('data', data);
  }, 100);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
