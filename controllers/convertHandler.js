/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {

    if(input != null){
      if (!isNaN(input)){
        return input;
      }
      var regDig = /\d/;
      if(!regDig.test(input)){
        return 1;
      }
    var result = 0;
    var firstChar = input.match('[a-zA-Z]');
    var lastDigit = input.indexOf(firstChar);
    var numString = input.substring(0,lastDigit);

    if(numString.includes("/")){
      var divIndex = input.indexOf("/");
      var regSlash = /\//g;
      var slashCount = numString.match(regSlash).length;
      if(slashCount > 1){
        return NaN;
      }
      result = parseFloat(numString.substring(0,divIndex))/parseFloat(numString.substring(divIndex+1));
    }
    else {
      result = parseFloat(numString);
    }

    return result;
  }
  return NaN;
  };
  
  this.getUnit = function(input) {
    if(input != null){
    var result;
    var reg = /\W*gal$|\W*km$|\W*l$|\W*lbs$|\W*kg$|\W*mi$/i;
    console.log(input.match(reg));
    if(input.match(reg)!=null){
      var firstChar = input.match(reg);
      var lastDigit = input.indexOf(firstChar);
      result = input.substring(lastDigit).toLowerCase();
      console.log(firstChar)
      switch(result){
        case"km":
        return"Km";
        case"l":
        return "L";
        case"kg":
        return "Kg";
        default:
          return result;
      }
    }
    else{
      return null;
    }   
  }
  return null;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(initUnit != null){
    switch(initUnit.toLowerCase()){
      case "gal":
        return "L";
      case "l":
        return"gal";
      case "km":
        return "mi";
      case "mi":
        return "Km";
      case "lbs":
        return "Kg";
      case "kg":
        return "lbs";
      default:
        return null;
    }
  }
  return null;
  };

  this.spellOutUnit = function(unit) {
    if(unit != null){
    switch(unit.toLowerCase()){
      case "gal":
        return "Gallons";
      case "l":
        return"Liters";
      case "km":
        return "Kilometers";
      case "mi":
        return "Miles";
      case "lbs":
        return "Pounds";
      case "kg":
        return "Kilograms";
      default:
        return null;
    }
  }
  return null;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if(initUnit != null){
    switch(initUnit.toLowerCase()){
      case "gal":
        return initNum*galToL;
      case "l":
        return initNum/galToL;
      case "km":
        return initNum/miToKm;
      case "mi":
        return initNum*miToKm;
      case "lbs":
        return initNum*lbsToKg;
      case "kg":
        return initNum/lbsToKg;
      default:
        return null;
    }
  }
  return null;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
