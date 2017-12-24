import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DeckDetails } from "../components";

class DeckDetailsContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deckTitle
    };
  };

  static propTypes = {
    deck: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
  };

  render() {
    return (
      <DeckDetails deck={this.props.deck} navigation={this.props.navigation} />
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

export default connect(mapStateToProps)(DeckDetailsContainer);
