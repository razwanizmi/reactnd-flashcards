import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
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

const NewCard = ({ handleSubmit, handleBack }) => {
  return (
    <View style={styles.formContainer}>
      <Field
        name="question"
        component={renderField}
        label="Question"
        placeholder="Enter a question for this card"
      />
      <Field
        name="answer"
        component={renderField}
        label="Answer"
        placeholder="Enter an answer for this card"
      />
      <Button
        title="Cancel"
        onPress={handleBack}
        containerViewStyle={styles.buttonContainer}
      />
      <Button
        title="Create card"
        onPress={handleSubmit}
        backgroundColor={turquoise}
        containerViewStyle={styles.buttonContainer}
      />
    </View>
  );
};

NewCard.propTypes = {
  handleBack: PropTypes.func.isRequired,
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

export default NewCard;
