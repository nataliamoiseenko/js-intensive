const firstValue = prompt('Enter first number', '');

if (isNaN(firstValue)) {
  console.log('Incorrect input');
} else {
  const secondValue = prompt('Enter second number', '');

  if (isNaN(secondValue)) {
    console.log('Incorrect input');
  } else {
    calculateSumAndQuotient(+firstValue, +secondValue);
  }
}

function calculateSumAndQuotient(first, second) {
  if (!first || !second) {
    return console.log('Enter number!');
  }

  console.log(`Answer: ${first + second}, ${first / second}`);
}
