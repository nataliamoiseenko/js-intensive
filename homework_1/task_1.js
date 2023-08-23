const firstValue = prompt('Enter first number', '');

if (!firstValue) {
  console.log('Enter first number!');
} else {
  const secondValue = prompt('Enter second number', '');

  if (!secondValue) {
    console.log('Enter second number!');
  } else {
    handleValues(+firstValue, +secondValue);
  }
}

function handleValues(first, second) {
  if (isNaN(first) || isNaN(second)) {
    return console.log('Incorrect input');
  }

  if (second % 1 !== 0) {
    return console.log('Second number needs to be a whole integer');
  }

  console.log(first.toString(second));
}
