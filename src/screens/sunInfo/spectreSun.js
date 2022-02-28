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

export default function spectreSun() {

  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => fetchFunction()}
        />
      }
      >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
          Le rayonnement solaire est l'ensemble des ondes électromagnétiques émises par le Soleil.

Il est composé de toute la gamme des rayonnements, de l'ultraviolet lointain comme les rayons gamma aux ondes radio en passant par la lumière visible1. Le rayonnement solaire contient aussi des rayons cosmiques de particules animées d'une vitesse et d'une énergie extrêmement élevées. Une partie de ce rayonnement est filtrée par la couche d'ozone avant d'atteindre la troposphère. Via la photosynthèse il est nécessaire à la plupart des espèces qui vivent sur la Terre.

L’émission d'ondes électromagnétiques par le Soleil est convenablement modélisée par un corps noir à 5 800 kelvins, et peut donc être décrit par la loi de Planck. Le maximum d’émission est dans le vert (λ=504 nm), et la répartition du rayonnement est à peu près pour moitié dans la lumière visible, pour moitié dans l'infrarouge, avec 1 % d'ultraviolets5.

Arrivé au niveau de la mer, c'est-à-dire ayant traversé toute l'atmosphère terrestre, une partie du rayonnement solaire a été absorbée. On peut repérer notamment sur le spectre ci-contre les bandes d'absorption de l'ozone (qui absorbe une partie importante des ultraviolets), du dioxygène, du dioxyde de carbone et de l'eau.


          </Text>
      </View>
    </ScrollView>
  );
}