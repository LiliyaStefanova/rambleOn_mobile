import React, { FunctionComponent } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import androidSafeArea from "../settings/androidSafeArea";

const SettingsScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={androidSafeArea.AndroidSafeArea}>
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
