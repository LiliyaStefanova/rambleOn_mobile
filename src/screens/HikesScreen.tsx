import React, { FunctionComponent } from "react";
import androidSafeArea from "../settings/androidSafeArea";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const HikesScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={androidSafeArea.AndroidSafeArea}>
      <Text>Test</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={hikes}
        renderItem={renderItem}
      ></FlatList>
    </SafeAreaView>
  );
};

const keyExtractor = (item: any, index: any) => index.toString();

const renderItem = ({ item }: any): any => {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.desc}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

const hikes = [
  {
    name: "West Highland Way",
    desc: "West Highland Way with Ben Nevis",
  },
  {
    name: "Wild Atlantic Way",
    desc: "Multi day trip along the coast",
  },
  {
    name: "Wendover Circular",
    desc: "Single day circular hike",
  },
  {
    name: "Kungsleden Section",
    desc: "5 sections of the trail",
  },
];

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 50,
  },
});

export default HikesScreen;
