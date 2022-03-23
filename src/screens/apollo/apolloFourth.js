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

export default function FourthApollo() {

    const [refreshing, setRefreshing] = React.useState(false);
    const navigation = useNavigation();

    return (
      <ScrollView
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
            Apollo 14 (31 janvier 1971 - 9 février 1971) est la huitième mission habitée du programme Apollo et la troisième à se poser sur la Lune. Il s'agit de la première mission dont le but principal est scientifique et dont le lieu d’atterrissage a été sélectionné non en fonction de contraintes techniques, mais pour son intérêt géologique. Le module lunaire se pose dans la formation géologique Fra Mauro, destination originelle de la mission Apollo 13 avortée.
            </Text>
        </View>
      </ScrollView>
    );
  }