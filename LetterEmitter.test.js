const LetterEmitter = require('./LetterEmitter');

describe('LetterEmitter', () => {
  let letterEmitter;
  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  });

  it('splits a string and emits an event for each letter', done => {
    const letters = 'string string string';
    letterEmitter.on('item', letter => {
      expect(letters[letter.offset]).toEqual(letter.item);
    });
    letterEmitter.on('end', () => {
      done();
    });
    letterEmitter.read(letters);
  }); 
});

// jest.fn() is used as mock behavior? use it for callbacks? make a const of call back but why?