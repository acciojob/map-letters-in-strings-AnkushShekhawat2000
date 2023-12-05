//your JS code here. If required.
const mapLetters = (word) => {
  const letterMap = {};

  // Iterate through each letter in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // If the letter is not in the map, add it with an array containing the current index
    if (!letterMap[letter]) {
      letterMap[letter] = [i];
    } else {
      // If the letter is already in the map, append the current index to its array
      letterMap[letter].push(i);
    }
  }

  return letterMap;
};

// Examples
console.log(mapLetters("dodo")); // { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy")); // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes")); // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
