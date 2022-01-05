import { Saludos } from "./extend_events.js";
import { NotasEvents } from "./share_event.js";

const Salu2 = new Saludos(); 

Salu2.on('saludo', (data) => {
  console.log('Alguien saludo', data);
})

Salu2.saludar('Nacho');

NotasEvents.emit('crear:nota', {nota: 'ñañaña'});

// NotasEvents.crearNota('crear:nota', {nota: 'ñañaña'})