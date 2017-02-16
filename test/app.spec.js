const expect = require('chai').expect;
const path = require('path');
const sinon = require('sinon');

let data = require(path.join(__dirname, '..', 'src', 'index'));

describe('A very simple test', () => {

    it('can run tests', ()=> {
      let testDataFunctionReturnValue = data.testDataFunction();
      expect(testDataFunctionReturnValue).to.eql('testOne');
    })

    it('can use spies to get see how existing functions are used', ()=>{
      let spyDataFunction = sinon.spy(data, 'testDataFunction');
      data.testDataFunction();
      data.testDataFunction();      
      expect(spyDataFunction.callCount).to.eql(2);
    })
})
