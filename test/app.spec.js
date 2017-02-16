const expect = require('chai').expect;
const path = require('path');
const sinon = require('sinon');

let data = require(path.join(__dirname, '..', 'src', 'index'));

describe('A very simple test', () => {

    it('can run tests', ()=> {
      let testDataFunctionReturnValue = data.testDataFunction();
      expect(testDataFunctionReturnValue).to.eql('final value');
    });

    it('can use spies to get see how existing functions are used', () => {
      // set up test
      let spyDataFunction = sinon.spy(data, 'testDataFunction');

      data.testDataFunction();
      data.testDataFunction();

      // test
      expect(spyDataFunction.callCount).to.eql(2);
    });

    it('can use spies to see how helper functions are called indirectly', () => {
      // set up test
      var aThing = {
        main() {
          this.helper();
        },
        helper() {
          return 'some value';
        }  
      }
      sinon.spy(aThing, 'helper');      
      aThing.main();

      // test
      expect(aThing.helper.callCount).to.eql(1);
    });

    it('can use spies on helper functions in other modules', () => {
      // set up test
      sinon.spy(data, 'helperFunction');
      data.testDataFunction();

      // test
      expect(data.helperFunction.callCount).to.eql(1);
    });

    it('can use stubs to affect functionality', () => {
      // set up test
      data.helperFunction.restore();      
      const replacementFunction = () => {
        return 'value altered by a sinon stub!';
      }
      sinon.stub(data, 'helperFunction', replacementFunction);

      // test
      let testDataFunctionReturnValue = data.testDataFunction();
      expect(testDataFunctionReturnValue).to.eql('value altered by a sinon stub!');
    });

})
