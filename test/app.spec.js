let expect = require('chai').expect;
let path = require('path');

let testDataFunction = require(path.join(__dirname, '..', 'src', 'index'));

describe('A very simple test', () => {
    let aTestVariable = 'hello';

    it('can run tests', ()=> {
      testDataFunction();
      expect(aTestVariable).to.eql('hello');
    })
})
