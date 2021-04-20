import React, { FunctionComponent } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import androidSafeArea from "../settings/androidSafeArea";

const PlanScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={androidSafeArea.AndroidSafeArea}>
      <Text>Plan Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PlanScreen;
