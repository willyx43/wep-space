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

export default function AllSeasons() {

  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
          Pourquoi y a-t-il des saisons sur la Terre?
          Les changements de saison sont causés par deux phénomènes. D’abord, le mouvement de la Terre autour du Soleil. Ensuite, l’axe de rotation incliné de la Terre.

          La Terre tourne autour d’un axe. Cette ligne imaginaire va du pôle Sud au pôle Nord. Mais l’axe de rotation de la Terre n’est pas vertical. Il est plutôt incliné à 23,5°. La planète penche toujours dans la même direction dans son orbite autour du Soleil.
          </Text>
      </View>
    </ScrollView>
  );
}