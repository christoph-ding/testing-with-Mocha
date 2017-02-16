const expect = require('chai').expect;
const path = require('path');
const sinon = require('sinon');

let data = require(path.join(__dirname, '..', 'src', 'index'));

describe('A very simple test', () => {

    it('can run tests', ()=> {
      let testDataFunctionReturnValue = data.testDataFunction();
      expect(testDataFunctionReturnValue).to.eql('final value');
    })

    it('can use spies to get see how existing functions are used', () => {
      // spies
      let spyDataFunction = sinon.spy(data, 'testDataFunction');

      data.testDataFunction();
      data.testDataFunction();

      expect(spyDataFunction.callCount).to.eql(2);
    })

    it('can use spies to see how helper functions are called indirectly', () => {      
      var aThing = {
        main() {
          this.helper();
        },
        helper() {
          return 'some value';
        }  
      }
      // spies
      sinon.spy(aThing, 'helper');      
      aThing.main();

      expect(aThing.helper.callCount).to.eql(1);
    })

    it('can use spies on helper functions in other modules', () => {
      // spies
      sinon.spy(data, 'helperFunction');
      data.testDataFunction();
      expect(data.helperFunction.callCount).to.eql(1);
    })

})
