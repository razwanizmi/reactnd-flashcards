import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-elements";
import { peterRiver, turquoise } from "../utils/colors";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";

const Quiz = ({
  deck,
  navigation,
  quiz,
  resetQuiz,
  rightAnswer,
  showAnswer,
  showQuestion,
  wrongAnswer
}) => {
  const question = deck.questions[quiz.currentQuestion];

  if (!question) {
    clearLocalNotification().then(() => setLocalNotification());

    return (
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          {`You answered ${quiz.rightAnswers} out of ${
            deck.questions.length
          } question(s) correctly!`}
        </Text>
        <Button
          title="Back to deck"
          onPress={() => navigation.goBack()}
          containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
        <Button
          title="Restart quiz"
          onPress={resetQuiz}
          backgroundColor={turquoise}
          containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {`Question ${quiz.currentQuestion + 1} of ${deck.questions.length}`}
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Quit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {quiz.showAnswer ? (
          <View style={styles.quizContainer}>
            <Text style={styles.contentText}>{question.answer}</Text>
            <TouchableOpacity onPress={showQuestion}>
              <Text style={styles.flipText}>Show question</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <Text style={styles.contentText}>{question.question}</Text>
            <TouchableOpacity onPress={showAnswer}>
              <Text style={styles.flipText}>Show answer</Text>
            </TouchableOpacity>
          </View>
        )}
        <Button
          title="Incorrect"
          onPress={wrongAnswer}
          containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
        <Button
          title="Correct"
          onPress={rightAnswer}
          backgroundColor={turquoise}
          containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

Quiz.propTypes = {
  deck: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  rightAnswer: PropTypes.func.isRequired,
  showAnswer: PropTypes.func.isRequired,
  showQuestion: PropTypes.func.isRequired,
  wrongAnswer: PropTypes.func.isRequired
};

const styles = {
  mainContainer: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    paddingLeft: 15,
    paddingRight: 15
  },
  headerText: {
    fontSize: 15
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  quizContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 25
  },
  button: {
    width: Dimensions.get("window").width - 30
  },
  contentText: {
    fontSize: 25,
    textAlign: "center"
  },
  flipText: {
    marginTop: 25,
    color: peterRiver
  }
};

export default Quiz;
