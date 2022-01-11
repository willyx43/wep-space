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

export default function MoonScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [moon, setMoon] = React.useState(0);
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
    </ScrollView>
  );
}
