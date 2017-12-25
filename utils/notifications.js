import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const notificationKey = "Flashcard:notifications";

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(notificationKey).then(() =>
    Notifications.cancelAllScheduledNotificationsAsync()
  );
};

const createNotification = () => {
  return {
    title: "Time for a quiz",
    body: "Don't forget to practice your flashcards",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(notificationKey)
    .then(data => JSON.parse(data))
    .then(parsedData => {
      if (parsedData === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(notificationKey, JSON.stringify(true));
          }
        });
      }
    });
};
