// Event Driven
// Eventos: algo sucede
// Listeneres: qué hacer cuando ocurra

class EventEmitter {
  constructor() {
    this.events = {}
  }
  on (type, listener) { // REGISTRADOR DE EVENTOS
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }
  emit(type, data) { // DISPARADOR DE EVENTOS
    if (this.events[type]) {
      this.events[type].forEach(listener => {
        listener(data);
      })
    }
  }
}

const emitter = new EventEmitter()

emitter.on('user:created', (user) => {
  console.log('User created', user);
  // Guardar el usuario en la base de datos...
  // Emitir otro evento...
  // Etc...
})

emitter.emit('user:created', {name: 'nacho', job: 'coder'});