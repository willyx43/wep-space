import React from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
  },
});

export default function SecondApollo() {

    const [refreshing, setRefreshing] = React.useState(false);
    const navigation = useNavigation();

    return (
      <ScrollView
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
            Apollo 12 (14 novembre 1969 - 24 novembre 1969) est la sixième mission spatiale avec équipage du programme Apollo, et la deuxième à se poser sur la Lune. L'équipage se compose de Pete Conrad (commandant), Richard Gordon et Alan Bean.
            </Text>
        </View>
      </ScrollView>
    );
  }