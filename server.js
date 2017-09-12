const express = require('express');
const WebSocket = require('ws');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/vendor/smoothie.js', (req, res) => {
    res.sendFile(__dirname + '/node_modules/smoothie/smoothie.js');
});

app.listen(3000, () => {

});

const wss = new WebSocket.Server({ port: 3001 });
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received %s', message);
    });

    clients.push(ws);

    ws.on('close', () => {
        let i = clients.indexOf(ws);
        clients.splice(i, 1);
        console.log('splice %d', i);
    });
});

let clients = [];

function sendData() {
    clients.forEach(ws => {
        if (ws.readyState === ws.OPEN) {
            let currentTime = new Date().getTime();
            let timeForFunctions = currentTime / (Math.PI * 1000);
            ws.send(currentTime + ',' + Math.sin(timeForFunctions) + ',' + Math.cos(timeForFunctions));
            //ws.send(Math.sin(timeForFunctions) + ',' + Math.cos(timeForFunctions));
        }
    });
}

setInterval(sendData, 5);