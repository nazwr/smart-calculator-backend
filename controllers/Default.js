'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addInput = function addInput (req, res, next) {
  var inputOne = parseInt(req.swagger.params['inputOne'].value);
  var inputTwo = parseInt(req.swagger.params['inputTwo'].value);

  Default.addInput(inputOne,inputTwo)
    .then(function (response) {
      response.result = inputOne + inputTwo;

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// module.exports.divideInput = function divideInput (req, res, next) {
//   var inputOne = req.swagger.params['inputOne'].value;
//   var inputTwo = req.swagger.params['inputTwo'].value;

//   Default.subtractInput(inputOne,inputTwo)
//     .then(function (response) {
//       response.result = inputOne / inputTwo;

//       utils.writeJson(res, response);
//     })
//     .catch(function (response) {
//       utils.writeJson(res, response);
//     });
// };

// module.exports.multiplyInput = function multiplyInput (req, res, next) {
//   var inputOne = req.swagger.params['inputOne'].value;
//   var inputTwo = req.swagger.params['inputTwo'].value;

//   Default.multiplyInput(inputOne,inputTwo)
//     .then(function (response) {
//       response.result = inputOne * inputTwo;

//       utils.writeJson(res, response);
//     })
//     .catch(function (response) {
//       utils.writeJson(res, response);
//     });
// };

module.exports.subtractInput = function subtractInput (req, res, next) {
  var inputOne = req.swagger.params['inputOne'].value;
  var inputTwo = req.swagger.params['inputTwo'].value;

  Default.divideInput(inputOne,inputTwo)
    .then(function (response) {
      response.result = inputOne - inputTwo;

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
