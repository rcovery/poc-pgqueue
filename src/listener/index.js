import pg_pkg from 'pg'
import { DB_CONFIG } from '../config.js';

import { ListenerInterface } from './listener.interface.js';

import { EmailListener } from './Email/email.listener.js';
import { WhatsAppListener } from './WhatsApp/whatsapp.listener.js';
import { ParalelepipedoListener } from './Paralelepipedo/paralelepipedo.listener.js';

const { Client } = pg_pkg;

/**
 * @param {ListenerInterface} ListenerInstance
*/
function register(ListenerInstance) {
    const client = new Client(DB_CONFIG);
    client.connect();
    client.query(`LISTEN "${ListenerInstance.name}"`);
    client.on('notification', ({ payload }) => {
        ListenerInstance.parse_channel_data(payload);
        ListenerInstance.execute();
    });
}

export function load_listener() {
    register(new EmailListener());
    register(new WhatsAppListener());
    register(new ParalelepipedoListener());
}