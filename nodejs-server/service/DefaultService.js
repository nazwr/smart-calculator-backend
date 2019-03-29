'use strict';


/**
 * add two numbers together
 *
 * inputOne String First input to resolve
 * inputTwo String First input to resolve
 * returns standardResponse
 **/
exports.addInput = function(inputOne,inputTwo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : "1234567890"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Divdie inputOne into inputTwo
 *
 * inputOne String First input to resolve
 * inputTwo String First input to resolve
 * returns standardResponse_2
 **/
exports.divideInput = function(inputOne,inputTwo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : "1234567890"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Multiply inputOne and inputTwo
 *
 * inputOne String First input to resolve
 * inputTwo String First input to resolve
 * returns standardResponse_2
 **/
exports.multiplyInput = function(inputOne,inputTwo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : "1234567890"
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
 * returns standardResponse_2
 **/
exports.subtractInput = function(inputOne,inputTwo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : "1234567890"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

