import {
  NEW_QUIZ,
  RESET_QUIZ,
  RIGHT_ANSWER,
  SHOW_ANSWER,
  SHOW_QUESTION,
  WRONG_ANSWER
} from "../actions/quiz";

const initialState = {
  currentQuestion: 0,
  deckId: null,
  rightAnswers: 0,
  showAnswer: false
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUIZ:
      return {
        ...initialState,
        deckId: action.deckId
      };
    case RESET_QUIZ:
      return {
        ...state,
        currentQuestion: 0,
        rightAnswers: 0,
        showAnswer: false
      };
    case RIGHT_ANSWER:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        rightAnswers: state.rightAnswers + 1,
        showAnswer: false
      };
    case SHOW_ANSWER:
      return {
        ...state,
        showAnswer: true
      };
    case SHOW_QUESTION:
      return {
        ...state,
        showAnswer: false
      };
    case WRONG_ANSWER:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        showAnswer: false
      };
    default:
      return state;
  }
};

export default quiz;
