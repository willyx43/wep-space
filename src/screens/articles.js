
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

export default function ArticlesScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [earth, setEarth] = React.useState(0);
  const navigation = useNavigation();
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  // React.useEffect(() => {
    async function fetchFunction() {
      try{
      const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/terre');
      const json = await response.json();
      setEarth(json);
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
          source={require("../assets/earth.jpeg")}
        ></Image>
        <Text>Les dernières actus</Text>
      </View>
      <View>
        <Card style={{alignItems: 'center'}}>
          <Card.Title>Les saisons</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("allSeasons")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://promenade.imcce.fr/fr/images/gif5/544.gif',
            }}
          />
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Hemisphère</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("hemisphere")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://www.curionautes.com/wp-content/uploads/2019/01/Pourquoi-il-y-a-des-saisons-1110x622.jpg',
            }}
          />
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Age de la terre</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("ageEarth")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://www.scienceetfoi.com/wp-content/uploads/2013/07/R_Age_terre.jpg',
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
}