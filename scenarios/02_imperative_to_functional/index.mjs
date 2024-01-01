const numbers = [1, 2, 3, 4, 5];

function doX() {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  console.log(`doubled numbers: ${JSON.stringify(doubled)}`);
}

function doY() {
  const even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    }
  }

  console.log(`even numbers: ${JSON.stringify(even)}`);
}

function doZ() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(`sum: ${sum}`);
}

function main() {
  doX();
  doY();
  doZ();
}

main();
