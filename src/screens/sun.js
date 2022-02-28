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


export default function SunScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [sun, setSun] = React.useState(0);
  const navigation = useNavigation();
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  // React.useEffect(() => {
    async function fetchFunction() {
      try{
      const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/soleil');
      const json = await response.json();
      setSun(json);
      }
      catch(err) {
        throw err;
      }
    }
    // fetchFunction();
  // }, []);
 
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
        <Image
          style={styles.tinyLogo}
          source={require("../assets/sun.jpeg")}
        ></Image>
        <Text>name : {sun.name}</Text>
        <Text>gravity : {sun.gravity}</Text>
        <Text>Mean Radius {sun.meanRadius}</Text>
        <Text>Equatorial radius in kilometres. : {sun.equaRadius}</Text>
        <Text>Polar radius in kilometres. : {sun.polarRadius}</Text>
      </View>
      <View>
        <Card style={{alignItems: 'center'}}>
          <Card.Title>Les types d'UV</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("uvTypes")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'http://www.piscine-clic.com/news/wp-content/uploads/2011/06/UV22.jpg?x90673',
            }}
          />
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Spectres du Soleil</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("spectreSun")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://assets.lls.fr/pages/6225102/PC2.15.INF3_v2-01.png',
            }}
          />
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Vie humaine</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("humanLife")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://i.f1g.fr/media/ext/680x382_crop/sante.lefigaro.fr/sites/default/files/img/2017/10/06/Peau_soleil.jpg',
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
}