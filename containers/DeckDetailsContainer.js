import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DeckDetailsContainer extends Component {
  render() {
    return <Text>Deck Details</Text>;
  }
}

export default connect()(DeckDetailsContainer);
