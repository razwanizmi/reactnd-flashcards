import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Decks } from "../components";
import * as decksActionCreators from "../actions/decks";

class DecksContainer extends Component {
  static propTypes = {
    decks: PropTypes.object.isRequired,
    fetchAndHandleDecks: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchAndHandleDecks();
  }

  render() {
    return (
      <Decks decks={this.props.decks} navigation={this.props.navigation} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(decksActionCreators, dispatch);
};

const mapStateToProps = ({ decks }) => {
  return {
    decks
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);
