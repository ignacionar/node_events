import { EventEmitter } from "events";

export class Notas extends EventEmitter {
  constructor() {
    super();
    this.nota = 'Nota Instances';
  }

  crearNota(data) { 
    // Customizar event
    console.log(`${this.nota}: ${data}`);

    // Una vez terminado, lo disparo
    this.emit('crear:nota', data);
    console.log(this.listenerCount('crear:nota'))
    console.log("Total listeners:", this.listenerCount('crear:nota'))
  } 
}

export const NotasEvents = new Notas();

// Compartir el listener en otros archivos
NotasEvents.on('crear:nota', (nota) => {
  console.log('Crear nota', nota)
})