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

export default function UvTypes() {

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
          Le rayonnement ultraviolet (UV), également appelé « lumière noire » parce que généralement invisible à l’œil nu, est un rayonnement électromagnétique de longueur d'onde inférieure à celle de la lumière visible, mais supérieure à celle des rayons X. Les rayons UV ne peuvent être observés qu’indirectement, soit par la fluorescence, soit à l’aide de détecteurs spécialisés.

Le nom signifie « au-delà du violet » (du latin ultra : « au-delà de »), le violet étant la couleur de fréquence la plus élevée (et donc de longueur d'onde la plus courte) de la lumière visible.

Les ampoules ordinaires sont conçues pour émettre peu d'ultraviolets1, à l'inverse des ampoules ultraviolettes et du soleil.

Les ultraviolets ont été découverts en 1801 par le physicien allemand Johann Wilhelm Ritter d'après leur action chimique sur le chlorure d'argent.

Les couleurs visibles vont de 623 à 740 nm pour le rouge et de 380 à 430 nm pour le violet. Au delà, les lumières invisibles du spectre ultraviolet peuvent être subdivisées selon leur longueur d'onde en :

UV proches (380-200 nm), VUV (Vacuum ultraviolet, 200-120 nm) qui, comme leur nom l'indique, ne se propagent pas dans l'air, et ultraviolets extrêmes (120–10 nm), d'autres standards peuvent donner d'autres définitions (cf. ISO 21348, Definitions of Solar Irradiance Spectral Categories en section Bandes spectrales des radiations UV) ;
UV-A1 : 340−400 nm ; UV-A2 : 315−340 nm ; UV-B : 280−315 nm ; UV-C : 100−280 nm. Ces trois bandes sont standardisées.
Les ultraviolets sont la cause du bronzage mais, à haute dose, sont nocifs pour la santé humaine, notamment à cause de leur effet mutagène ; ils peuvent provoquer des cancers cutanés tels que le mélanome, provoquer un vieillissement prématuré de la peau (rides), des brûlures (coup de soleil), des cataractes. Ils sont néanmoins nécessaires à petites doses régulières pour la synthèse de la vitamine D. Ils sont capables de « casser » de nombreux composés organiques en suspension dans l'air ou dans les eaux superficielles, et des agents tels que les virus à ARN, et participant à la destruction (photodégradation) de certains polluants ou de molécules odorantes (parfums des fleurs par exemple), mais aussi à la pollution
          </Text>
      </View>
    </ScrollView>
  );
}