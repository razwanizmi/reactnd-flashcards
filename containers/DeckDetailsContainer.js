import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DeckDetails } from "../components";
import * as quizActionCreators from "../actions/quiz";

class DeckDetailsContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deckTitle
    };
  };

  static propTypes = {
    deck: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    newQuiz: PropTypes.func.isRequired
  };

  handleAddCard = () => {
    this.props.navigation.navigate("NewCard", {
      deckId: this.props.deck.deckId
    });
  };

  handleStartQuiz = () => {
    this.props.newQuiz(this.props.deck.deckId);
    this.props.navigation.navigate("Quiz");
  };

  render() {
    return (
      <DeckDetails
        deck={this.props.deck}
        handleAddCard={this.handleAddCard}
        handleStartQuiz={this.handleStartQuiz}
      />
    );
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  return {
    deck: {
      ...decks[navigation.state.params.deckId],
      deckId: navigation.state.params.deckId
    }
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(quizActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  DeckDetailsContainer
);
