import { FunctionComponent } from "react";

import { View, Text } from 'react-native';

const HomeScreen: FunctionComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
