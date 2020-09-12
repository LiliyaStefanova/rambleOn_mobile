import React, { FunctionComponent } from "react";
import { ListItem, Avatar } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";

const HomeScreen:FunctionComponent = () => {  
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={hikes}
      renderItem={renderItem}
    ></FlatList>
  );
};

const keyExtractor = (item:any, index: any) => index.toString();

const renderItem = ({ item }: any):any => {
  <ListItem bottomDivider>
    <Avatar />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.desc}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
    </ListItem>
}

const hikes = [
  {
    name: 'West Highland Way',
    desc: 'West Highland Way with Ben Nevis'
  },
  {
    name: 'Wild Atlantic Way',
    desc: 'Multi day trip along the coast'
  },
  {
    name: 'Wendover Circular',
    desc: 'Single day circular hike'
  },
  {
    name: 'Kungsleden Section',
    desc: '5 sections of the trail'
  }
];

export default HomeScreen;