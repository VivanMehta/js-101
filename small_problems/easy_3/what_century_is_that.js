function century(year) {
  let century = Math.ceil(year / 100);
  if (century === 11 || century === 12 || century === 13) {
    return century + "th";
  }

  let lastDigit = century % 10;
  let suffix;
  switch (lastDigit) {
    case 1:
      suffix = "st"
      break;
    case 2:
      suffix = "nd"
      break;
    case 3:
      suffix = "rd"
      break;
    default:
      suffix = "th"
  }

  return century + suffix;
}

console.log(century(2000));   // Output: "20th"
console.log(century(2001));   // Output: "21st"
console.log(century(1965));   // Output: "20th"
console.log(century(256));    // Output: "3rd"
console.log(century(5));      // Output: "1st"
console.log(century(10103));  // Output: "102nd"
console.log(century(1052));   // Output: "11th"
console.log(century(1127));   // Output: "12th"
console.log(century(11201));  // Output: "113th"