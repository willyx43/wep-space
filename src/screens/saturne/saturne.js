import React, { useState, useEffect, Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
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

export default function SaturneScreen() {
  const [saturne, setSaturne] = React.useState(0);
  const navigation = useNavigation();

  async function fetchFunction() {
    try{
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/saturne');
    const json = await response.json();
    setSaturne(json);
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
              'https://services.meteored.com/img/article/en-saturno-llueven-diamantes-263801-1_768.jpg',
          }}
        ></Image>
        <Text>saturne</Text>
        <Text>name : {saturne.name}</Text>
        <Text>gravity : {saturne.gravity}</Text>
        <Text>Mean Radius {saturne.meanRadius}</Text>
        <Text>Equatorial radius in kilometres. : {saturne.equaRadius}</Text>
        <Text>Polar radius in kilometres. : {saturne.polarRadius}</Text>
        <View style={styles.description}>
          <Text>Saturne est la sixième planète du Système solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse. Son rayon moyen de 58 232 km est environ neuf fois et demi celui de la Terre et sa masse de 568,46 × 1024 kg est 95 fois plus grande. Orbitant en moyenne à environ 1,4 milliard de kilomètres du Soleil (9,5 unités astronomiques), sa période de révolution vaut un peu moins de 30 années tandis que sa période de rotation est estimée à 10 h 33 min.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
