function invoiceTotal(...args) {
  let total = 0;

  for(let idx = 0; idx < args.length; idx++) {
    let charge = args[idx];
    total += charge;
  }

  return total;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?
