const calculateChange = function(total, cash) {
  const changeDenominations = [
    ['twentyDollars', 2000],
    ['tenDollars', 1000],
    ['fiveDollars', 500],
    ['twoDollars', 200],
    ['oneDollar', 100],
    ['quarter', 25],
    ['dime', 10],
    ['nickel', 5],
    ['penny', 1],
  ];
  let amountOfChange = cash - total;
  let change = {};
  for (let denomination of changeDenominations) {
    if (Math.floor(amountOfChange / denomination[1])) {
      change[denomination[0]] = Math.floor(amountOfChange / denomination[1]);
    }
    amountOfChange = amountOfChange % denomination[1];
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
