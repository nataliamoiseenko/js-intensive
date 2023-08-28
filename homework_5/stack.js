class Stack {
  constructor(max = 10) {
    if (
      typeof max !== 'number'
      || isNaN(max)
      || !(Number.isFinite(max))
    ) {
      throw new Error('Error: max number type is incorrect!');
    }

    this.first = null;
    this.size = 0;
    this.maxStackSize = max;
  }

  push(elem) {
    if (this.size === this.maxStackSize) {
      throw new Error('Error: stack is full!');
    }

    const stackElem = this.createStackElem(elem);

    if (!this.first) {
      this.first = stackElem;
    } else {
      const prevFirst = this.first;
      this.first = stackElem;
      this.first.next = prevFirst;
    }

    this.size++;
  }

  pop() {
    if (!this.first) {
      throw new Error('Error: stack is empty!');
    }

    const prevFirst = this.first;
    this.first = prevFirst.next;
    this.size--;

    return prevFirst.value;
  }

  peek() {
    if (!this.first) {
      return null;
    }

    return this.first.value;
  }

  isEmpty() {
    return !this.first;
  }

  toArray() {
    if (!this.first) {
      return [];
    }

    const arr = [ this.first.value ];
    let prevFirst = this.first;

    while (prevFirst.next !== null) {
      prevFirst = prevFirst.next;
      arr.push(prevFirst.value);
    }

    return arr;
  }

  createStackElem(value) {
    return { value, next: null };
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Error: entity is not iterable!');
    }

    const newStack = new Stack(iterable.length);

    for (let i = 0; i < iterable.length; i++) {
      newStack.push(iterable[i]);
    }

    return newStack;
  }
}

module.exports = { Stack };
