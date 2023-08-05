const firstValue = prompt('Enter first number', '');

if (!firstValue) {
  alert('Enter first number!');
} else {
  const secondValue = prompt('Enter second number', '');
  if (!secondValue) {
    alert('Enter second number!');
  } else {
    handleValues(+firstValue, +secondValue);
  }
}

function handleValues(first, second) {
  if (isNaN(first) || isNaN(second)) {
    alert('Incorrect input');
    return;
  }

  if (second % 1 !== 0) {
    alert('Second number needs to be a whole integer');
    return;
  }

  alert(first.toString(second));
}