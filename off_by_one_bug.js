// Log a Multiplication table of all numbers from 1 upto 10.
// Off by one bug: Only logs numbers up to 9 due to a for loop conditional check error.

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
  // Checks Out
}

// Outer Loop: 1 - 9
for (let i = 1; i < 10; i += 1) {
  let row = '';
  // Inner Loop: 1 - 10
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}
