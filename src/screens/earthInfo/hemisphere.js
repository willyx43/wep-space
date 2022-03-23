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

export default function Hemisphere() {

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
          Nord et sud
          Le globe terrestre est divisible en deux hémisphères nord et sud. Le premier est centré sur le pôle Nord, le deuxième sur le pôle Sud, avec la séparation entre les deux au niveau du grand cercle équidistant des pôles, c'est-à-dire l'équateur.

          Est et ouest
          De façon analogue, on peut diviser la Terre en un hémisphère ouest et un hémisphère est en prenant en compte les parties à l'ouest et à l'est du méridien de Greenwich. Contrairement à celle centrée sur les deux pôles de l'axe de rotation et l'équateur, cette autre division se fait sur un tracé arbitraire, qui retient Greenwich comme méridien de référence. En théorie, il existe autant d'hémisphères Est et Ouest que de méridiens.

          Terre et océan
          Il est possible de déterminer un hémisphère terrestre, qui regrouperait le maximum de terres émergées, et un hémisphère maritime, qui contiendrait le maximum d'océans.

          L'hémisphère terrestre est centré sur 47° 13′ N, 1° 32′ O, à Nantes en France. Il contient 85 % des terres émergées, dont l'Europe, l'Afrique, l'Amérique du Nord, ainsi que la majeure partie de l'Asie et de l'Amérique du Sud. L'hémisphère maritime, centré sur 47° 13′ S, 178° 28′ E à l'est de la Nouvelle-Zélande, contient la plus grande partie de l'océan Pacifique et de l'océan Indien, ainsi que l'Australie, la Nouvelle-Zélande, les îles Fidji, l'Antarctique, le sud de l'Amérique du Sud et du Sud-Est asiatique.

          Bien que l'hémisphère terrestre contienne le plus de terres émergées possible, celles-ci n'occupent cependant que 49,5 % de sa superficie totale : l'hémisphère terrestre reste en majorité maritime.

          Jour et nuit
          Alternativement, on peut également parler d'hémisphères "diurne" et "nocture" lorsqu'on veut par exemple distinguer la partie de la Terre baignée dans la lumière du jour de l'hémisphère plongé dans l'obscurité. Dans ce cas, la limite entre les deux hémisphères est définie par la ligne du terminateur et varie au fur et à mesure de la rotation de la Terre sur elle-même.
          </Text>
      </View>
    </ScrollView>
  );
}