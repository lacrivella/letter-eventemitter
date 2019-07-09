const LetterEmitter = require('./LetterEmitter');

describe('LetterEmitter', done => {
  let letterEmitter;
  beforeEach(done => {
    letterEmitter = new LetterEmitter();
    done();
  });
  it('splits a string and emits an event for each letter', () => {
    const letters = 'string string string';
    letterEmitter.on('item', letter => {
      expect(letters).toContainEqual(letter)
    });
    letterEmitter.on('end', () => {
      done();
    });
    letterEmitter.read(letters);
  }); 
});
