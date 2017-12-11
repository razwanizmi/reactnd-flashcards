import { AsyncStorage } from "react-native";

const storageKey = "Flashcard:decks";

export const formatTitleId = title => {
  return title.split(" ").reduce((accumulator, word) => {
    if (word) {
      accumulator += word[0].toUpperCase() + word.slice(1);
    }
    return accumulator;
  }, "");
};

export const fetchDecks = () => {
  return AsyncStorage.getItem(storageKey).then(results => JSON.parse(results));
};

export const createDeck = title => {
  return AsyncStorage.mergeItem(
    storageKey,
    JSON.stringify({
      [formatTitleId(title)]: {
        title,
        questions: []
      }
    })
  );
};

export const createDeckCard = (deckId, card) => {
  const currentDecks = fetchDecks();

  return AsyncStorage.setItem(
    storageKey,
    JSON.stringify({
      ...currentDecks,
      [deckId]: {
        ...currentDecks[deckId],
        questions: [...currentDecks[deckId].questions, card]
      }
    })
  );
};
