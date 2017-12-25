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
  NewCardContainer,
  NewDeckContainer,
  QuizContainer
} from "./containers";
import { TopBar } from "./components";
import * as reducers from "./reducers";
import { peterRiver, white } from "./utils/colors";
import { setLocalNotification } from "./utils/notifications";

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
      activeTintColor: peterRiver
    }
  }
);

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DeckDetails: {
      screen: DeckDetailsContainer
    },
    NewCard: {
      screen: NewCardContainer
    },
    Quiz: {
      screen: QuizContainer
    }
  },
  {
    navigationOptions: {
      headerBackTitleStyle: {
        color: white
      },
      headerStyle: {
        backgroundColor: peterRiver
      },
      headerTitleStyle: {
        color: white
      },
      headerTintColor: white
    }
  }
);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TopBar backgroundColor={peterRiver} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
