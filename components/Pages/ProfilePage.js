import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar2.png"
              }}
            />

            <Text style={styles.name}>Martin Martinez</Text>
            <Text style={styles.userInfo}>martin.matinez@gmail.com </Text>
            <Text style={styles.userInfo}>Seattle, WA, USA </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://image.flaticon.com/icons/png/512/70/70370.png"
              }}
            />
            <View style={styles.infoContent}>
              <Text style={styles.info}>Home</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/wired/64/000000/contract-job.png"
              }}
            />
            <View style={styles.infoContent}>
              <Text style={styles.info}>Profile</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={{
                uri:
                  "https://cdn3.iconfinder.com/data/icons/disability-accessibility/100/disabled-01-512.png"
              }}
            />
            <View style={styles.infoContent}>
              <Text style={styles.info}>Wheelchair setting</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.icon}
              source={{
                uri: " https://image.flaticon.com/icons/png/512/707/707675.png"
              }}
            />
            <View style={styles.infoContent}>
              <Text style={styles.info}>Reviews</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfilePage;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC"
  },
  headerContent: {
    padding: 30,
    alignItems: "center"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600"
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600"
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center"
  },
  item: {
    flexDirection: "row"
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF"
  }
});
