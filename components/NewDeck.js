import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { Field } from "redux-form";

const renderField = field => {
  const { meta: { touched, error } } = field;

  return (
    <View>
      <FormLabel>{field.label}</FormLabel>
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
      <View style={styles.buttonContainer}>
        <Button title="Create card" onPress={handleSubmit} />
      </View>
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
  }
};

export default NewDeck;
