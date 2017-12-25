import { reset } from "redux-form";
import {
  fetchDecks,
  createDeck,
  createDeckCard,
  formatTitleId
} from "../utils/api";

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

export const createAndHandleDeck = (deck, callback) => {
  const { title } = deck;

  return dispatch => {
    createDeck(deck).then(() => {
      dispatch(reset("NewDeckForm"));
      fetchDecks()
        .then(decks => {
          dispatch(receiveDecks(decks));
        })
        .then(() => callback(formatTitleId(title), title));
    });
  };
};

export const createAndHandleDeckCard = (deckId, card) => {
  return dispatch => {
    createDeckCard(deckId, card).then(() => {
      fetchDecks().then(decks => dispatch(receiveDecks(decks)));
    });
  };
};
