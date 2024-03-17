import { ListenerInterface } from "../listener.interface.js";

export class ParalelepipedoListener extends ListenerInterface {
    _data
    name = 'paralelepipedo'

    parse_channel_data(data) {
        this._data = JSON.parse(data);
    }

    async execute() {
        console.log('Data received:', this._data);
        console.log('Paralelepípedo executed!');
    }
}