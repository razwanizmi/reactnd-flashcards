import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Card } from "react-native-elements";
import { asbestos, black, clouds } from "../utils/colors";

const Decks = ({ decks, navigation }) => {
  return (
    <ScrollView>
      {Object.keys(decks).map(deckId => (
        <TouchableOpacity
          key={deckId}
          onPress={() =>
            navigation.navigate("DeckDetails", {
              deckId,
              deckTitle: decks[deckId].title
            })
          }
        >
          <Card
            title={decks[deckId].title}
            titleStyle={styles.title}
            containerStyle={styles.cardContainer}
          >
            <View style={styles.textContainer}>
              <Text style={styles.count}>{`${
                decks[deckId].questions.length
              } card(s)`}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

Decks.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

const styles = {
  cardContainer: {
    // borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    backgroundColor: clouds
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: black,
    fontSize: 20
  },
  count: {
    color: asbestos
  }
};

export default Decks;
