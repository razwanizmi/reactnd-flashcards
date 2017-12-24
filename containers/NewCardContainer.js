import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm } from "redux-form";
import { NewCard } from "../components";
import * as decksActionCreators from "../actions/decks";

class NewCardContainer extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  static propTypes = {
    createAndHandleDeckCard: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  handleBack = () => {
    this.props.navigation.goBack();
  };

  onSubmit = values => {
    const deckId = this.props.navigation.state.params.deckId;

    this.props.createAndHandleDeckCard(deckId, values);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <NewCard
        handleBack={this.handleBack}
        handleSubmit={this.props.handleSubmit(this.onSubmit)}
      />
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.question) {
    errors["question"] = "Question must contain at least a character";
  }

  if (!values.answer) {
    errors["answer"] = "Answer must contain at least a character";
  }

  return errors;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(decksActionCreators, dispatch);
};

export default reduxForm({ form: "NewCardForm", validate })(
  connect(null, mapDispatchToProps)(NewCardContainer)
);
