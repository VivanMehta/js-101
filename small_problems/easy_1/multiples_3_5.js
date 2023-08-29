function computeSum(targetNum) {
  let total = 0;
  let num = 1;
  while (num <= targetNum) {
    if (num % 3 === 0 || num % 5 === 0) {
      total += num;
    }
    num += 1;
  }
  return total;
}

console.log(computeSum(3))
console.log(computeSum(5));       // 8
console.log(computeSum(10));      // 33
console.log(computeSum(1000));    // 234168