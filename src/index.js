'use strict';

// a test function for us to stub in our tests
testDataFunction() {
  console.log('... inside the testDataFunction ...');
  let testValue = 'testOne';
  return testValue;
}

module.exports = testDataFunction
