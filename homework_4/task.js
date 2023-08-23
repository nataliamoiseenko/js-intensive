function concatStrings(startString, separator = '') {
  if (typeof separator !== 'string') {
    separator = '';
  }

  let concated = startString + separator;

  function recursiveConcatStrings(newString) {
    if (newString === undefined || typeof newString !== 'string') {
      return concated;
    }

    concated = concated + newString + separator;

    return recursiveConcatStrings;
  }

  return recursiveConcatStrings;
}


class Calculator {
  constructor(firstNum, secondNum) {
    this.checkForNumberType(firstNum);
    this.checkForNumberType(secondNum);

    this.firstNum = firstNum;
    this.secondNum = secondNum;

    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(num) {
    this.checkForNumberType(num);
    this.firstNum = num;
  }

  setY(num) {
    this.checkForNumberType(num);
    this.secondNum = num;
  }

  logSum() {
    console.log(this.firstNum + this.secondNum);
  }

  logMul() {
    console.log(this.firstNum * this.secondNum);
  }

  logSub() {
    console.log(this.firstNum - this.secondNum);
  }

  logDiv() {
    if (this.secondNum === 0) {
      throw new Error('Error: division by zero is incorrect!');
    }

    console.log(this.firstNum / this.secondNum);
  }

  checkForNumberType(param) {
    if (
      param === undefined
      || typeof param !== 'number'
      || isNaN(param)
      || !(Number.isFinite(param))
    ) {
      throw new Error('Error: parameter type is incorrect!');
    }
  }
}
