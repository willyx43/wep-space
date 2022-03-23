import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

MapboxGL.setAccessToken('pk.eyJ1Ijoid2lsbHl4NDMiLCJhIjoiY2t3emphMnhiMHl2ODJ1cDhpcmd4czUwZyJ9.ZTboPDW4wAI5W5AWv4WhTA');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 1000,
    width: 1000,
  },
  map: {
    flex: 1
  },
  buttonISS: {
    width:30,
    backgroundColor:"transparent",
    position:'absolute',
    top:"80%",
    left:"62%",
    zIndex:10
  },
  buttonProfil: {
    width:30,
    backgroundColor:"transparent",
    position:'absolute',
    top:"80%",
    left:"32%",
    zIndex:10
  }
});

export default function MapScreen() {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const navigation = useNavigation();

  async function fetchFunction() {
    try{
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const json = await response.json();
    setLatitude(json.latitude);
    setLongitude(json.longitude)
    // console.log(json);
    }
    catch(err) {
      throw err;
    }
  }
  useEffect(() => {
    fetchFunction();
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be called every 2 seconds');
      fetchFunction();
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} zoomEnabled onPress={() => fetchFunction()}>
          <MapboxGL.UserLocation
            showsUserHeadingIndicator
          />
          <MapboxGL.Camera
            // followUserLocation
            // followZoomLevel={3}
            // followUserMode="normal"
            zoomLevel={2}
          />
          <MapboxGL.PointAnnotation
          id="iss"
          coordinate={[longitude, latitude]} />
          {/* <Image
          source={require('../../assets/pin.png')}
          style={{
            flex: 1,
            resizeMode: 'contain',
            width: 25,
            height: 25
            }}/> */}
            
        </MapboxGL.MapView>
        <View style={styles.buttonISS}>
          <Icon
            raised
            name='info'
            type='font-awesome'
            color='#f50'
            onPress={() => navigation.navigate("IssInfo")} />
        </View>
        <View style={styles.buttonProfil}>
          <Icon
            raised
            name='cog'
            type='font-awesome'
            color='#f50'
            onPress={() => navigation.navigate("InfoProfil")} />
        </View>
      </View>
    </View>
  );
}
