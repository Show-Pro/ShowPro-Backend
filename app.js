import dotenv from 'dotenv';
import fetch from 'node-fetch';

import { Server } from 'socket.io';

const io = new Server(8080, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
		transports: ['websocket']
	}
});

io.on('connection', (socket) => {
	socket.on('product', (arg) => {
		console.log('received product: ' + arg);
        io.emit('order', arg);
	});

});

console.log('Listening on 8080');