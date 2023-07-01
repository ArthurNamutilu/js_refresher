const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        // raise an event
        this.emit('logging', { userName: 'Gg' });
    }
}

module.exports = Logger;