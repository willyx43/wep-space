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

export default function VenusScreen() {
  const [venus, setVenus] = React.useState(0);
  const navigation = useNavigation();

  async function fetchFunction() {
    try{
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/venus');
    const json = await response.json();
    setVenus(json);
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
              'https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/8/f/08ffcdcfe0_50182005_venus-ocean.jpg',
          }}
        ></Image>
        <Text>venus</Text>
        <Text>name : {venus.name}</Text>
        <Text>gravity : {venus.gravity}</Text>
        <Text>Mean Radius {venus.meanRadius}</Text>
        <Text>Equatorial radius in kilometres. : {venus.equaRadius}</Text>
        <Text>Polar radius in kilometres. : {venus.polarRadius}</Text>
        <View style={styles.description}>
          <Text>Vénus est la deuxième planète du Système solaire par ordre d'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l'amour.

Vénus orbite autour du Soleil tous les 224,7 jours terrestres. Avec une période de rotation de 243 jours terrestres, il lui faut plus de temps pour tourner autour de son axe que toute autre planète du Système solaire. Comme Uranus, elle possède une rotation rétrograde et tourne dans le sens opposé à celui des autres planètes : le soleil s'y lève à l'ouest et se couche à l'est. Vénus possède l'orbite la plus circulaire des planètes du Système solaire avec une excentricité orbitale presque nulle et, du fait de sa lente rotation, est quasiment sphérique (aplatissement considéré comme nul). Elle ne possède pas de satellite naturel.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
