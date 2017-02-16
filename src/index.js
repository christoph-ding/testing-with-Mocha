'use strict';

// a test function for us to stub in our tests
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
