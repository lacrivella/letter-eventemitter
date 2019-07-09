const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  read(str) {
    str.split('').forEach(letter => {
      this.emit('letter', letter);
    });
    this.emit('end');
  }
}

module.exports = LetterEmitter;
