export const NEW_QUIZ = "NEW_QUIZ";
export const RESET_QUIZ = "RESET_QUIZ";
export const RIGHT_ANSWER = "RIGHT_ANSWER";
export const SHOW_ANSWER = "SHOW_ANSWER";
export const SHOW_QUESTION = "SHOW_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";

export const newQuiz = deckId => {
  return {
    type: NEW_QUIZ,
    deckId
  };
};

export const resetQuiz = () => {
  return {
    type: RESET_QUIZ
  };
};

export const rightAnswer = () => {
  return {
    type: RIGHT_ANSWER
  };
};

export const showAnswer = () => {
  return {
    type: SHOW_ANSWER
  };
};

export const showQuestion = () => {
  return {
    type: SHOW_QUESTION
  };
};

export const wrongAnswer = () => {
  return {
    type: WRONG_ANSWER
  };
};
