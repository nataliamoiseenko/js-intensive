Array.prototype.myFilter = function(callbackFunc, array = this) {
  const filtered = [];

  for (let i = 0; i < array.length; i++) {
    const isCorrect = callbackFunc(array[i], i, array);

    if (isCorrect) {
      filtered.push(array[i]);
    }
  }

  return filtered;
};


function createDebounceFunction(callbackFunc, delay) {
  let timeoutId;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callbackFunc();
    }, delay);
  };
}
