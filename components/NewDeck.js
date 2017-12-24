import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { Field } from "redux-form";
import { black, turquoise } from "../utils/colors";

const renderField = field => {
  const { meta: { touched, error } } = field;

  return (
    <View>
      <FormLabel labelStyle={styles.label}>{field.label}</FormLabel>
      <FormInput
        onChangeText={field.input.onChange}
        placeholder={field.placeholder}
        {...field.input}
      />
      <FormValidationMessage>{touched && error}</FormValidationMessage>
    </View>
  );
};

const NewDeck = ({ handleSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <Field
        name="title"
        component={renderField}
        label="Title"
        placeholder="Enter a title for this deck"
      />
      <Button
        title="Create deck"
        onPress={handleSubmit}
        backgroundColor={turquoise}
        containerViewStyle={styles.buttonContainer}
      />
    </View>
  );
};

NewDeck.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const styles = {
  formContainer: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 25
  },
  label: {
    color: black
  }
};

export default NewDeck;
