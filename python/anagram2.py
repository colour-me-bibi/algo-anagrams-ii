from collections import Counter


def anagrams_for(word, list_of_words):
    """
    Returns words from the given list which are anagrams of the given word.

    Args:
        word (str): The word to find anagrams for.
        list_of_words (list): The list of words to search.

    Returns:
        list: A list of anagrams of the given word.
    """

    word_counter = Counter(word)

    return [w for w in list_of_words if Counter(w) == word_counter]
