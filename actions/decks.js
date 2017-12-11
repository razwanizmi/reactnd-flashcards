import { fetchDecks, createDeck, createDeckCard } from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";

const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  };
};

export const fetchAndHandleDecks = () => {
  return dispatch => {
    fetchDecks().then(decks => dispatch(receiveDecks(decks)));
  };
};

export const createAndHandleDeck = title => {
  return dispatch => {
    createDeck(title).then(decks => dispatch(receiveDecks(decks)));
  };
};

export const createAndHandleDeckCard = (deckId, card) => {
  return dispatch => {
    createDeckCard(deckId, card).then(decks => dispatch(receiveDecks(decks)));
  };
};
