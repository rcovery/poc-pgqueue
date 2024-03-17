import { URLSearchParams } from 'node:url';
import { createServer } from 'node:http'
import pg_pkg from 'pg'

import { DB_CONFIG } from './src/config.js';
import { load_listener } from './src/listener/index.js';

load_listener();

// Create a local server to receive data from
const server = createServer();

const { Client } = pg_pkg;
const client = new Client(DB_CONFIG);
client.connect();

// Listen to the request event
server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const [route, query] = request.url.split('?');

    const url = new URLSearchParams(query);

    switch (route) {
        case '/send/email': {
            const email = url.get('email') || 'ryan@test.io';
            const content = url.get('content') || '';

            client.query(`NOTIFY "email", '${JSON.stringify({
                email,
                content
            })}'`);

            return res.end(JSON.stringify({
                data: 'Email sent!',
            }));
        }
        case '/send/whatsapp': {
            const number = url.get('number') || '5518988881111';
            const content = url.get('content') || '';

            client.query(`NOTIFY "whatsapp", '${JSON.stringify({
                number,
                content
            })}'`);

            return res.end(JSON.stringify({
                data: 'WhatsApp sent!',
            }));
        }
        case '/send/paralelepipedo': {
            const content = url.get('content') || '';

            client.query(`NOTIFY "paralelepipedo", '${JSON.stringify({
                content
            })}'`);

            return res.end(JSON.stringify({
                data: 'Paralelepípedo sent!',
            }));
        }
    }

    res.end(JSON.stringify({
        data: 'Route not found!',
    }));
});

server.listen(3000);