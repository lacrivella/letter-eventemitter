const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  read(str) {
    str.split('').forEach((item, index) => {
      this.emit('letter', { item: item, offset: index });
    });
    this.emit('end');
  }
}

module.exports = LetterEmitter;
