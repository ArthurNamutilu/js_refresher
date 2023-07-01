const EventEmmiter = require('node:events');
const emiter = new EventEmmiter();

emiter.on('logging', (arg) => {
    console.log('Logging in', arg);
})


emiter.emit('logging', { user: 'Arthur' })