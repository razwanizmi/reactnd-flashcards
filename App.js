import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TopBar } from "./components";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopBar barStyle="light-content" backgroundColor="#7f8c8d" />
      </View>
    );
  }
}
