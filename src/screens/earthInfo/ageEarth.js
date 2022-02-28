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

export default function ageEarth() {

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
          L'âge de la Terre est, selon les connaissances actuelles, de 4,54 milliards d'années (4,54 × 109 ans ± 1 %)1. Cette datation repose sur des preuves scientifiques provenant de la datation radiométrique des météorites et se trouve cohérente avec l'âge des échantillons des plus anciennes roches lunaires et terrestres connues2,3. Cet "âge" correspond au début de l'accrétion de la Terre.

Avec la Révolution scientifique et le développement de la datation radiométrique, les mesures de traces dans des minéraux riches en uranium démontraient que certains étaient âgés de plus d'un milliard d'années4. Les plus anciens de ces minéraux analysés – des petits cristaux de zircon trouvés dans les Jack Hills d'Australie – sont datés d'au moins 4,404 milliards d'années5,6,7. En comparant la masse et la luminosité du Soleil à celles des multitudes d'autres étoiles, il apparaît que le Système solaire ne peut être beaucoup plus ancien que ces roches. Les inclusions minérales riches en calcium et en aluminium (en anglais CAI pour « Ca-Al-rich inclusions ») – les plus anciens constituants solides connus des météorites qui se sont formées dans le Système solaire – sont datés de 4,567 milliards d'années8,9, donnant un âge pour le Système solaire et une limite supérieure à l'âge de la Terre.

L'hypothèse dominante est que l'accrétion de la Terre commença peu après la formation des CAI et des météorites. Parce que la durée exacte de l’accrétion de la Terre n'est pas encore connue et les projections données par les différents modèles allant de quelques millions à cent millions d’années, l'âge exact de la Terre est difficile à déterminer, voire à définir. Il est de même souvent difficile de déterminer l'âge exact d'une roche. Elle peut être le produit de l'agrégation de minéraux d'âges différents. Si c'est un grès, la sédimentation a mélangé des grains arrachés à des roches variées, plus anciennes. Si c'est un granite, il peut avoir absorbé des cristaux (de zircon, souvent) aux roches qu'il a traversées en montant des profondeurs.
          </Text>
      </View>
    </ScrollView>
  );
}