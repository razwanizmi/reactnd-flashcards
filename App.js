import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { TopBar } from "./components";

const store = createStore(
  combineReducers({
    state: (state = {}) => state
  })
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TopBar barStyle="light-content" backgroundColor="#7f8c8d" />
        </View>
      </Provider>
    );
  }
}
