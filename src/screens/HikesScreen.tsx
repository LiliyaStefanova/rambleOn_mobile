import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HikesScreen: FunctionComponent = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hikes Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 50,
  },
});

export default HikesScreen;
