import React, { useState, useEffect, Component } from 'react';
import { 
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  description: {
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40
  }
});

export default function JupiterScreen() {
  const [jupiter, setJupiter] = React.useState(0);
  const navigation = useNavigation();

  async function fetchFunction() {
    try{
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/saturne');
    const json = await response.json();
    setJupiter(json);
    }
    catch(err) {
      throw err;
    }
  }

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <ScrollView>
      <View style={styles.page}>
        <Image style={{height: 350, width: 350}}
          source={{
            uri:
              'https://www.sciencesetavenir.fr/assets/img/2020/09/18/cover-r4x3w1000-5f64bce6c5bc2-heic2017a.jpg',
          }}
        ></Image>
        <Text>Jupiter</Text>
        <Text>name : {jupiter.name}</Text>
        <Text>gravity : {jupiter.gravity}</Text>
        <Text>Mean Radius {jupiter.meanRadius}</Text>
        <Text>Equatorial radius in kilometres. : {jupiter.equaRadius}</Text>
        <Text>Polar radius in kilometres. : {jupiter.polarRadius}</Text>
        <View style={styles.description}>
          <Text>Jupiter est l'une des quatre planètes géantes gazeuses, étant principalement composée de gaz et dépourvue de réelle surface. C'est la plus grande planète du Système solaire, avec un diamètre équatorial de près de 143 000 km. La densité moyenne de Jupiter, 1,326 g/cm3, est la deuxième plus élevée des planètes géantes, mais reste inférieure à celles des quatre planètes telluriques1.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
