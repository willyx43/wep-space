import React from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
  },
});


export default function EarthScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [earth, setEarth] = React.useState(0);
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
      <Text>name : {earth.name}</Text>
      <Text>gravity : {earth.gravity}</Text>
      <Text>Mean Radius {earth.meanRadius}</Text>
      <Text>Equatorial radius in kilometres. : {earth.equaRadius}</Text>
      <Text>Polar radius in kilometres. : {earth.polarRadius}</Text>
    </View>
    </ScrollView>
  );
}