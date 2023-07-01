const EventEmitter = require('events');  // EventEmitter - class
const emmiter = new EventEmitter; // emmiter - object

// Register a listener i.e func that is called when event is raised

emmiter.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
})


// Raise an event
emmiter.emit('messageLogged', { id: 3820, url: 'http://' });  // messageLogged = event name