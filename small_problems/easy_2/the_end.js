// Write a function that returns the next to last word in the String passed to
// it as an argument.

function penultimate(str) {
  const words = str.split(' ');
  if (words.length >= 2) {
    return words[words.length - 2];
  }
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true