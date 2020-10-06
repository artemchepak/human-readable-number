module.exports = function toReadable(number) {

    const numberMatchObject = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  
      function oneNumber(n){
        return numberMatchObject[n];
    }
      function twoNumber(n){
        let secondDigit = parseInt(n.toString()[1]);
        if (n < 20 || n === 20) {
          return numberMatchObject[n];
        }
        else if (parseInt(n.toString()[1]) === 0) {
          return numberMatchObject[n];
        }
        else {
          return numberMatchObject[n - secondDigit] + ' ' + numberMatchObject[secondDigit];
        }
    }
      function threeNumber(n){
        let hundred = parseInt(number.toString()[0]);
        let dozen = parseInt(number.toString().slice(1))
        if (dozen !== 0) {
            return numberMatchObject[hundred] + " hundred " + twoNumber(dozen);
        }
        else {
            return numberMatchObject[hundred] + " " + "hundred";
        }
    }
  
    if (number === 0) {
      return 'zero';
    }
    else if (number.toString().length === 1) {
        return oneNumber(number);
      }
    else if (number.toString().length === 2) {
      return twoNumber(number);
    }
    else {
      return threeNumber(number);
    }
  }