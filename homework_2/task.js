function makeObjectDeepCopy(object) {
  if (object === null) {
    return null;
  }

  const clone = {};

  for (let key in object) {
    if (typeof object[key] === 'object') {
      clone[key] = makeObjectDeepCopy(object[key]);
    } else {
      clone[key] = object[key];
    }
  }

  if (Array.isArray(object)) {
    clone.length = obj.length;
    return Array.from(clone);
  }

  return clone;
}


function selectFromInterval(array, firstValue, secondValue) {
  if (!Array.isArray(array)) {
    throw new Error('Error');
  };

  if (typeof firstValue !== 'number' || typeof secondValue !== 'number') {
    throw new Error('Error');
  };

  let min = firstValue;
  let max = secondValue;

  if (firstValue > secondValue) {
    min = secondValue;
    max = firstValue;
  }

  const selected = array.filter(el => {
    if (typeof el !== 'number') {
      throw new Error('Error');
    }

    return el >= min && el <= max;
  });

  return selected;
}


const myIterable = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (!this.current || !this.last) {
          throw new Error('From or to are not defined');
        }

        if (typeof this.current !== 'number' || typeof this.last !== 'number') {
          throw new Error('From or to are not numbers');
        }

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    }
  },
};
