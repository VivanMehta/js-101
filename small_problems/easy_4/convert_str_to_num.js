function stringToInteger(string) {
  for (var i = 0; i < string.length; i++) {
    return Math.floor(string);
  }
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true  