import { ListenerInterface } from "../listener.interface.js";

export class WhatsAppListener extends ListenerInterface {
    _data
    name = 'whatsapp'

    parse_channel_data(data) {
        this._data = JSON.parse(data);
    }

    async execute() {
        console.log('Data received:', this._data);

        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        });

        console.log('WhatsApp executed!');
    }
}