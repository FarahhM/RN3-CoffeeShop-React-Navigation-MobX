import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components

import OurStack from "../Navigation/index";

class HomePage extends Component {
  static navigationOptions = {
    title: "Coffee List"
  };
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <OurStack />
      </Container>
    );
  }
}

export default HomePage;
