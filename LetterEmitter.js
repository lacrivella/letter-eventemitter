const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  read(str) {
    str.split('').forEach((item, offset) => {
      this.emit('letter', { item, offset });
    });
    this.emit('end');
  }
}

module.exports = LetterEmitter;
