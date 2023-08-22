function concatStrings(first, separator = '') {
  if (typeof separator !== 'string') {
    separator = '';
  }

  function concatSecondString(second) {
    if (typeof second !== 'string') {
      return first + separator;
    }

    function concatThirdString(third) {
      if (typeof third !== 'string') {
        return first + separator + second;
      }

      return () => {
        return first + separator + second + separator + third;
      };
    }

    return concatThirdString;
  }

  return concatSecondString;
}


class Calculator {
  constructor(firstNum, secondNum) {
    if (firstNum === undefined || secondNum === undefined) {
      throw new Error('Error: input is incorrect!');
    }

    if (
        typeof firstNum !== 'number' || typeof secondNum !== 'number'
        || isNaN(firstNum) || isNaN(secondNum)
        || !(Number.isFinite(firstNum)) || !(Number.isFinite(secondNum))
    ) {
      throw new Error('Error: input is not a number!');
    }

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
