function wordSizes(str) {
  const words = str.split(/\W+/); // Split by non-word characters
  const result = {};

  for (const word of words) {
    const wordSize = word.length;
    if (wordSize > 0) {
      if (result[wordSize]) {
        result[wordSize]++;
      } else {
        result[wordSize] = 1;
      }
    }
  }

  console.log(result);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "4": 1 }
wordSizes('');                                            