import React from "react";
import { View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DeckDetailsContainer,
  DecksContainer,
  NewDeckContainer
} from "./containers";
import { TopBar } from "./components";
import * as reducers from "./reducers";
import { wetAsphalt } from "./utils/colors";

const store = createStore(
  combineReducers({ ...reducers, form: formReducer }),
  applyMiddleware(thunk)
);

const Tabs = TabNavigator(
  {
    Decks: {
      screen: DecksContainer,
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
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: wetAsphalt
    }
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetails: {
    screen: DeckDetailsContainer
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TopBar barStyle="dark-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
