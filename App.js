import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { TabNavigator } from "react-navigation";
import thunk from "redux-thunk";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { TopBar } from "./components";
import * as reducers from "./reducers";

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

function Decks() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>This is the decks component</Text>
    </View>
  );
}

function NewDeck() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>This is the new deck component</Text>
    </View>
  );
}

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="cards-outline"
            size={30}
            color={tintColor}
          />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabbarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="add-to-list" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000"
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TopBar barStyle="dark-content" />
          <Tabs />
        </View>
      </Provider>
    );
  }
}
