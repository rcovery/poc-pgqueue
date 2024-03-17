import { ListenerInterface } from "../listener.interface.js";

export class EmailListener extends ListenerInterface {
    _data
    name = 'email'

    parse_channel_data(data) {
        this._data = JSON.parse(data);
    }

    async execute() {
        console.log('Data received:', this._data);

        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        });

        console.log('Email executed!');
    }
}