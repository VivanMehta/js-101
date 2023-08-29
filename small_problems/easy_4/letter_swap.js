function swap(text) {
  const words = text.split(' '); // Step 1
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstChar = word.charAt(0);
    const lastChar = word.charAt(word.length - 1);

    // Swap first and last characters
    const modifiedWord = lastChar + word.slice(1, -1) + firstChar;
    result.push(modifiedWord); // Push modified word into the result array
  }

  const modifiedText = result.join(' '); // Step 3
  return modifiedText;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
