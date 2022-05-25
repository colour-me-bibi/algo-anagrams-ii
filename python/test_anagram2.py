# Can you translate this driver code to unit tests?

import unittest
from anagram2 import anagrams_for

list_of_words = ["threads", "trashed", "hardest", "hatreds", "hounds"]


class TestAnagramsFor(unittest.TestCase):
    def test_anagrams_for(self):
        self.assertEqual(anagrams_for("threads", list_of_words), ["threads", "trashed", "hardest", "hatreds"])
        self.assertEqual(anagrams_for("apple", list_of_words), [])
