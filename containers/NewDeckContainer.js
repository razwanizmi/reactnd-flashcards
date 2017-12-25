import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import { NewDeck } from "../components";
import * as decksActionCreators from "../actions/decks";

class NewDeckContainer extends Component {
  static propTypes = {
    createAndHandleDeck: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  onSubmit = values => {
    this.props.createAndHandleDeck(values, (deckId, deckTitle) => {
      this.props.navigation.navigate("DeckDetails", {
        deckId,
        deckTitle
      });
    });
  };

  render() {
    return <NewDeck handleSubmit={this.props.handleSubmit(this.onSubmit)} />;
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title must contain at least a character";
  }

  return errors;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(decksActionCreators, dispatch);
};

export default reduxForm({ form: "NewDeckForm", validate })(
  connect(null, mapDispatchToProps)(NewDeckContainer)
);
