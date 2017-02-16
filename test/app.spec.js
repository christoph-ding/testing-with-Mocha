const expect = require('chai').expect;
const path = require('path');
const sinon = require('sinon');

let testDataFunction = require(path.join(__dirname, '..', 'src', 'index'));

describe('A very simple test', () => {

    it('can run tests', ()=> {
      let testDataFunctionReturnValue = testDataFunction();
      expect(testDataFunctionReturnValue).to.eql('testOne');
    })

    it('it can spy', ()=> {
      let spy = sinon.spy(testDataFunction);
      console.log(spy.callCount)
    })

})
