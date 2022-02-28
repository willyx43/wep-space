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

export default function humanLife() {

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
          Le soleil, source de vitamine D
Le principal bienfait de l’exposition au soleil est son action sur la synthèse de la vitamine D. Le rôle du soleil est en effet indispensable car notre organisme n’est pas capable de produire lui-même cette vitamine, pourtant essentielle à son bon fonctionnement. La vitamine D est souvent qualifiée de « vitamine solaire » ou de « vitamine du soleil » car il en est la source principale.

L’impact du soleil sur le moral
Le soleil a également une influence sur notre moral. L’hiver est d’ailleurs une période qui marque chez certaines personnes l’entrée dans un état de déprime passager qui s’estompe au retour des beaux jours.
L’effet du soleil sur l’horloge interne
Le soleil et la lumière qu’il diffuse ont un impact sur l’horloge interne et une action régulatrice sur le sommeil et sur l’humeur. Ils permettent à l’organisme de s’adapter aux variations saisonnières.
 
Le premier impact de la lumière du soleil a lieu lorsqu'elle est perçue par les cellules ganglionnaires situées dans la rétine. Cet impact, bien qu’immédiat, reste ponctuel si l’ensoleillement n’est pas prolongé. Après plusieurs jours et à raison d’au moins 1 500 lux (l’unité de mesure de la lumière), on peut parler d’effet durable et profond : la lumière du soleil est transformée en signaux électriques qui augmentent les taux de dopamine et de sérotonine, des neurotransmetteurs connus sous le nom d’hormones du plaisir, de la détente et du bonheur.
 
Les bienfaits de la lumière du soleil
En stimulant les hormones du bien-être, la lumière du soleil entraîne bonne humeur, énergie, optimisme et dynamisme. Elle favorise indirectement l’augmentation de l’activité physique et des performances intellectuelles et peut réduire la fatigue due à certaines pathologies.
 
La vitamine D issue des rayons du soleil permet de mieux assimiler le magnésium et donc de lutter contre le stress, l’anxiété et la fatigue.
 
La lumière est très importante pour prévenir les Troubles affectifs saisonniers (TAS). C’est pourquoi certains médecins prescrivent des cures de lumière ou de luminothérapie durant l’hiver afin de compenser la baisse de luminosité.
          </Text>
      </View>
    </ScrollView>
  );
}