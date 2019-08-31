/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

// var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log(input, initNum, initUnit,returnNum, returnUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if(isNaN(initNum) || initUnit == null){
        if(isNaN(initNum) && initUnit == null){
          res.send("invalid number and unit")
        }
        else if(isNaN(initNum)){
          res.send("invalid number");
        }
        else{
          res.send("invalid unit");
        }
      }
      else{
      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});
      }
    });
    
};
