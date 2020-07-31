let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*
This loop will iterate up to the first number evenly divisible by 3. Afterwards, however, the loop will infinitely log the first number.
This loop is a result of the else statement not being executed once the first divisible number is found. Since the number will not change after it is logged,
the while loop check will infinitely iterate.
*/
