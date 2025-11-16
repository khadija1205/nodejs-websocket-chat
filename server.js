const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 3100;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    let username = 'Anonymous';

    socket.on('set-username', (name) => {
        username = name;
        console.log(`User ${socket.id} set username to: ${username}`);


        const timestamp = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        io.emit('user-joined', {
            username: username,
            timestamp: timestamp
        });
    });

    



    socket.on('chat-message', (message) => {
        console.log(`${username}: ${message}`);

        const timestamp = new Date().toLocaleDateString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        io.emit('chat-message', {
            username: username,
            message: message,
            timestamp: timestamp
        });
    });


    socket.on('typing', () => {
        socket.broadcast.emit('user-typing', {
            username: username
        })
    })

    socket.on('stop-typing', () => {
        socket.broadcast.emit('user-stop-typing');
    })

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);

        const timestamp = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Notify all users that someone left
        io.emit('user-left', {
            username: username,
            timestamp: timestamp
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
