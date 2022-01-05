import { EventEmitter } from "events";

export class Saludos extends EventEmitter {
  constructor() {
    super();
    this.saludo = 'Hola';
  }

  saludar(data) { 
    // Customizar event
    console.log(`${this.saludo}: ${data}`);

    // Una vez terminado, lo disparo
    this.emit('saludo', data);
  } 
}

