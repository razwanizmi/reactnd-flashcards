import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-elements";
import { black, turquoise } from "../utils/colors";

const DeckDetails = ({ deck, handleAddCard, handleStartQuiz }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.count}>{`${deck.questions.length} card(s)`}</Text>
      </View>
      <Button
        title="Add a card"
        onPress={handleAddCard}
        containerViewStyle={styles.buttonContainer}
      />
      <Button
        title="Start quiz"
        onPress={handleStartQuiz}
        backgroundColor={turquoise}
        containerViewStyle={styles.buttonContainer}
        disabled={deck.questions.length === 0}
      />
    </View>
  );
};

DeckDetails.propTypes = {
  deck: PropTypes.object.isRequired,
  handleAddCard: PropTypes.func.isRequired,
  handleStartQuiz: PropTypes.func.isRequired
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    color: black
  },
  count: {
    marginTop: 25
  },
  buttonContainer: {
    marginTop: 25
  }
};

export default DeckDetails;
