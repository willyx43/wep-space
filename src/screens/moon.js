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

export default function MoonScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [moon, setMoon] = React.useState(0);
  const navigation = useNavigation();
  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  // React.useEffect(() => {
    async function fetchFunction() {
      try{
      const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/lune');
      const json = await response.json();
      setMoon(json);
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
          source={require("../assets/moon.jpeg")}
        ></Image>
        <Text>name : {moon.name}</Text>
        <Text>gravity : {moon.gravity}</Text>
        <Text>Mean Radius {moon.meanRadius}</Text>
        <Text>Equatorial radius in kilometres. : {moon.equaRadius}</Text>
        <Text>Polar radius in kilometres. : {moon.polarRadius}</Text>
      </View>
      <View>
        <Card style={{alignItems: 'center'}}>
          <Card.Title>Apollo 11</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("FirstApollo")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://cdn.artphotolimited.com/images/5c506285aab9ba29d067563a/1000x1000/crew-of-the-apollo-11.jpg',
            }}
          />
          <Text h4>
          Juillet 1969
          </Text>
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Apollo 12</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("SecondApollo")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/6/6a/Astronaut_Alan_L._Bean_is_about_to_step_off_the_ladder_of_the_Lunar_Module.jpg/1280px-Astronaut_Alan_L._Bean_is_about_to_step_off_the_ladder_of_the_Lunar_Module.jpg',
            }}
          />
          <Text h4>
          Novembre 1969
          </Text>
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Apollo 13</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("ThirdApollo")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://www.imagesdoc.com/wp-content/uploads/sites/33/2018/10/The_Original_Apollo_13_Prime_Crew_-_GPN-2000-001166-2.jpg',
            }}
          />
          <Text h4>
          Avril 1970
          </Text>
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Apollo 14</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("FourthApollo")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'http://www.cite-espace.com/content/uploads/2021/02/apollo14-photos.001.jpeg',
            }}
          />
          <Text h4>
          Janvier-Février 1971
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}
