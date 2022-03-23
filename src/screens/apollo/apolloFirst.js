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

export default function FirstApollo() {

  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
          Apollo 11 est une mission spatiale américaine lancée le 16 juillet 1969 afin de conduire, pour la première fois, des humains sur la Lune. Elle comprenait les astronautes Neil Armstrong (chef de la mission), Buzz Aldrin et Michael Collins. Le 20 juillet (ou 21, selon l'endroit où on se trouve)1, leur véhicule spatial alunit2 ; Neil Armstrong mit en premier le pied sur la Lune, suivi de peu par Buzz Aldrin.
          </Text>
      </View>
    </ScrollView>
  );
}