/**
 * Returns True if the two objects are shallowly equal, False otherwise.
 *
 * @param {Object} a The first object to compare
 * @param {Object} b The second object to compare
 * @returns {Boolean} Whether the objects are equal
 */
const objectEqualsShallow = (a, b) => {
  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);

  return Array.from(allKeys).every((key) => a[key] === b[key]);
};

/**
 * Returns an Object where the keys are the characters in the string and the values are the number of times that character appears in the string.
 *
 * @param {String} string The string to count the characters of
 * @returns {Object} An object with the character counts of the string
 */
const createCounter = (string) => {
  const counter = {};

  for (let char of string) {
    counter[char] = (counter[char] || 0) + 1;
  }

  return counter;
};

/**
 * Returns whether the strings are case-insensitive anagrams of each other.
 *
 * @param {String} string1 The first string to compare
 * @param {String} string2 The second string to compare
 * @returns
 */
 const isCharacterMatch = (string1, string2) => {
    const validChars = new Set(
      Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890")
    );
  
    const string1Counts = createCounter(
      Array.from(string1)
        .filter((char) => validChars.has(char))
        .map((char) => char.toLowerCase())
    );
    const string2Counts = createCounter(
      Array.from(string2)
        .filter((char) => validChars.has(char))
        .map((char) => char.toLowerCase())
    );
  
    return objectEqualsShallow(string1Counts, string2Counts);
  };

/**
 * This functions returns a filtered array of words that are anagrams of the
 * given word.
 *
 * @param {String} word The word to check anagrams against
 * @param {Array} listOfWords The list of words to check
 * @returns {Array} An array of words that are anagrams of the given word
 */
const anagramsFor = (word, listOfWords) => listOfWords.filter((w) => isCharacterMatch(word, w));

module.exports = { anagramsFor };
