function runningTotal(array) {
  let runningSum = 0;
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      runningSum += array[i];
      resultArray.push(runningSum);
    }
  }

  console.log(resultArray);
}
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []