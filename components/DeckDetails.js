import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-elements";
import { black, turquoise } from "../utils/colors";

const DeckDetails = ({ deck }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.count}>{`${deck.questions.length} questions`}</Text>
      </View>
      <Button
        title="Add a card"
        onPress={() => console.log("Add card")}
        containerViewStyle={styles.buttonContainer}
      />
      <Button
        title="Start quiz"
        onPress={() => console.log("Start quiz")}
        backgroundColor={turquoise}
        containerViewStyle={styles.buttonContainer}
      />
    </View>
  );
};

DeckDetails.propTypes = {
  deck: PropTypes.object.isRequired
};

const styles = {
  containerStyle: {
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
