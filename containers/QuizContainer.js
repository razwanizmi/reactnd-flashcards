import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Quiz } from "../components";
import * as quizActionCreators from "../actions/quiz";

class QuizContainer extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  static propTypes = {
    deck: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    quiz: PropTypes.object.isRequired,
    resetQuiz: PropTypes.func.isRequired,
    rightAnswer: PropTypes.func.isRequired,
    showAnswer: PropTypes.func.isRequired,
    showQuestion: PropTypes.func.isRequired,
    wrongAnswer: PropTypes.func.isRequired
  };

  render() {
    return (
      <Quiz {...this.props} />
    );
  }
}

const mapStateToProps = ({ decks, quiz }) => {
  return {
    deck: decks[quiz.deckId],
    quiz
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(quizActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
