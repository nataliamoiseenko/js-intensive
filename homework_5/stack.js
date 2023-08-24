class Stack {
  constructor(max = 10) {
    if (
      typeof max !== 'number'
      || isNaN(max)
      || !(Number.isFinite(max))
    ) {
      throw new Error('Error: max number type is incorrect!');
    }

    this.stack = [];
    this.maxStackSize = max;
  }

  push(elem) {
    if (this.stack.length === this.maxStackSize) {
      throw new Error('Error: stack is full!');
    }

    this.stack = [...this.stack, elem];
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error('Error: stack is empty!');
    }

    const lastInStack = this.peek();
    delete this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;

    return lastInStack;
  }

  peek() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    return Array.from(this.stack);
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
