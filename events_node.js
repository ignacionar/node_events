import { EventEmitter } from "events";

const events = new EventEmitter();

// Registrar evento
events.on('user:created', (data) => { 
  console.log('User created', data);
});

// Ejecutar evento
events.emit('user:created', {name: 'xd'}); 