'use strict';

/* This is how I would normally expose a module, 
   but this method does not interact as desired with sinon spies

function helperFunction() {
  return 'final value'
}

function testDataFunction() {
  let testValue = 'initial value';
  testValue = helperFunction();
  return testValue;
}

module.exports = {
  testDataFunction: testDataFunction,
  helperFunction: helperFunction
}
*/

// we actually need have the entire module be in the interface
// let GLOBALVALUE = 'global value';

module.exports = {
  testDataFunction() {
    let testValue = 'initial value';
    testValue = this.helperFunction();
    return testValue;
  },

  helperFunction() {
    return 'final value'
  },

  testAnother() {
    let testValue = this.modifyValue(3);
    return testValue;
  },

  modifyValue(int) {
    return int + 2;
  },

  callManyTimes(n) {
    let counter = 0;
    while (counter < n) {
      this.someFunction();
      counter++;
    }
  },

  someFunction() {
    return;
  }
}
