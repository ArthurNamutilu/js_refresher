const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register listner
logger.on('logging', (arg) => {
    console.log('Listner called', arg)
});



logger.log(' new message');