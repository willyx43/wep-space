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

export default function ThirdApollo() {

    const [refreshing, setRefreshing] = React.useState(false);
    const navigation = useNavigation();

    return (
      <ScrollView
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
            Apollo 13 (11 avril 1970 - 17 avril 1970) est la troisième mission du programme spatial américain Apollo ayant pour objet de conduire un équipage jusque sur la Lune. Les astronautes Jim Lovell et Fred Haise devaient se poser près de la formation géologique Fra Mauro, site d'un des impacts d'astéroïde les plus importants à la surface de la Lune, tandis que Ken Mattingly devait rester en orbite. Mais la NASA pensait que ce dernier risquait d'attraper la rougeole du fait de la maladie d'un autre astronaute, et Jack Swigert fut envoyé à sa place. De plus, un accident grave, qui aurait pu être fatal pour l'équipage, se produisit durant le transit entre la Terre et la Lune et imposa l'abandon de la mission et le retour vers la Terre.
            </Text>
        </View>
      </ScrollView>
    );
  }