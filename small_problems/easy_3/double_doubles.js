function isDoubleNumber(number) {
  const numStr = number.toString();
  const middleIndex = Math.floor(numStr.length / 2);
  const leftSubstring = numStr.substring(0, middleIndex);
  const rightSubstring = numStr.substring(middleIndex);
  return leftSubstring === rightSubstring;
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));      // 74
console.log(twice(44));      // 88
console.log(twice(334433));  // 668866
console.log(twice(444));     // 888
console.log(twice(107));     // 214
console.log(twice(103103));  // 206206
console.log(twice(3333));    // 6666
console.log(twice(7676));    // 15352