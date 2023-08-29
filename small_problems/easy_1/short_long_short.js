/* 
JS101-JS119 - Small problems / Easy 1 - 7

write a function that takes two strings as arguments,
determines the length of the two strings
and then returns the result of the concatinating shorter string, longer string, and the shotrer string once again.

*/
function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

console.log(shortLongShort('abss', 'bse'));