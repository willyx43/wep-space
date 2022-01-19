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


export default function SunScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const [sun, setSun] = React.useState(0);
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
    </ScrollView>
  );
}