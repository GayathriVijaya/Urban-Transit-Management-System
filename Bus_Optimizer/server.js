const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());


app.post('/send-alert', (req, res) => {
    const { message } = req.body;
    io.emit('alert', message); 
    res.status(200).send('Alert received');
});


app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = 5000;
server.listen(PORT, () => console.log("Server running on port ${PORT}"));
