import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export class BookingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={{
            uri:
              "https://img.icons8.com/material-rounded/80/000000/nothing-found.png"
          }}
        />
        <Text style={styles.textMessage}>
          Your booking will be listed here.{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20
  },
  textMessage: {
    fontWeight: "bold"
  }
});

export default BookingPage;
