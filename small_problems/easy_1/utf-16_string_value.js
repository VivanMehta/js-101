function utf16Value(inputString) {
  let sum = 0;

  for (let i = 0; i < inputString.length; i++) {
    let utf16Value = inputString.charCodeAt(i);
    sum += utf16Value;
  }

  return sum;
}


const OMEGA = "\u03A9";  // UTF-16 character 'Ω' (omega)

console.log(utf16Value(OMEGA));  // Should print 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // Should print 2811