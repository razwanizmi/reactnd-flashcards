import React from "react";
import { View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Constants } from "expo";

const TopBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

TopBar.propTypes = {
  backgroundColor: PropTypes.string
};

export default TopBar;
