import React, { useState, useEffect, Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


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

export default function MarsScreen() {
  const [mars, setMars] = React.useState(0);
  const navigation = useNavigation();

  async function fetchFunction() {
    try{
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/mars');
    const json = await response.json();
    setMars(json);
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
              'https://www.vaisala.com/sites/default/files/styles/16_9_liftup_extra_large/public/images/LIFT-Mars%20the%20Red%20Planet-1600x900.jpg?itok=YXq-Cv1K',
          }}
        ></Image>
        <Text>mars</Text>
        <Text>name : {mars.name}</Text>
        <Text>gravity : {mars.gravity}</Text>
        <Text>Mean Radius {mars.meanRadius}</Text>
        <Text>Equatorial radius in kilometres. : {mars.equaRadius}</Text>
        <Text>Polar radius in kilometres. : {mars.polarRadius}</Text>
        <View style={styles.description}>
          <Text>Mars (prononcé en français : /maʁs/) est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse. Son éloignement au Soleil est compris entre 1,381 et 1,666 UA (206,6 à 249,2 millions de kilomètres), avec une période orbitale de 669,58 jours martiens (686,71 jours ou 1,88 année terrestre).</Text>
        </View>
      </View>
    </ScrollView>
  );
}
