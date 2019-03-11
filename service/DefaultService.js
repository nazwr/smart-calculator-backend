'use strict';


/**
 * add two numbers together
 *
 * inputOne String First input to resolve
 * inputTwo String First input to resolve
 * returns resultAdd
 **/
exports.addInput = function(inputOne,inputTwo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 4
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subtract inputOne from inputTwo
 *
 * inputOne String First input to resolve
 * inputTwo String First input to resolve
 * returns resultSubtract
 **/
exports.subtractInput = function(inputOne,inputTwo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

