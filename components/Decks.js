import React from "react";
import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { Card } from "react-native-elements";

const Decks = ({ decks }) => {
  return (
    <ScrollView>
      {Object.keys(decks).map(deckId => (
        <Card
          key={deckId}
          title={decks[deckId].title}
          titleStyle={styles.title}
        >
          <View style={styles.textContainer}>
            <Text>{`${decks[deckId].questions.length} cards`}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

Decks.propTypes = {
  decks: PropTypes.object.isRequired
};

const styles = {
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
};

export default Decks;
