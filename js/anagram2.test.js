const ana = require("./anagram2");
const listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

test("should return an array of words that are anagrams of the given word", () => {
  expect(ana.anagramsFor("threads", listOfWords).length).toBe(4);
  expect(ana.anagramsFor("threads", listOfWords)[0]).toBe("threads");
  expect(ana.anagramsFor("threads", listOfWords)[1]).toBe("trashed");
  expect(ana.anagramsFor("threads", listOfWords)[2]).toBe("hardest");
  expect(ana.anagramsFor("threads", listOfWords)[3]).toBe("hatreds");

  expect(ana.anagramsFor("apple", listOfWords).length).toBe(0);
});
