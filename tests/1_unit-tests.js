/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '2.2mi';
      assert.equal(convertHandler.getNum(input),2.2)
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '1/5Kg';
      assert.equal(convertHandler.getNum(input),0.2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '5.5/5mi';
      assert.equal(convertHandler.getNum(input),1.1);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '5.5/5/5mi';
      assert.isNaN(convertHandler.getNum(input));
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'mi';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      var expect = ['gal', 'L', 'mi', 'Km', 'lbs', 'Kg', 'gal', 'L', 'mi', 'Km', 'lbs', 'Kg'];
      input.forEach(function(ele, i) {
        console.log(ele, expect[i]);
        assert.equal(convertHandler.getUnit(ele),expect[i]);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = "as";
      console.log(convertHandler.getUnit(input));
      assert.isNull(convertHandler.getUnit(input));
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['L','gal','Km','mi','Kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['Gallons','Liters', 'Miles', 'Kilometers','Pounds','Kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [1, 'L'];
      var expected = 0.219968813;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [2, 'mi'];
      var expected = 3.21868;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [3, 'km'];
      var expected = 1.86411;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [4, 'lbs'];
      var expected = 1.81436948;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [6, 'kg'];
      var expected = 13.2277357;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});