import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { NewDeckContainer } from "./containers";
import { TopBar } from "./components";
import * as reducers from "./reducers";
import { silver, wetAsphalt } from "./utils/colors";

const store = createStore(
  combineReducers({ ...reducers, form: formReducer }),
  applyMiddleware(thunk)
);

function Decks() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: wetAsphalt,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        minHeight: 100,
        shadowColor: silver,
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }}
    >
      <Text>This is the decks component</Text>
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
      screen: NewDeckContainer,
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
      activeTintColor: wetAsphalt
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
