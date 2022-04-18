import React, {useEffect, useContext, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  button: {
    backgroundColor:"transparent",
    position:'absolute',
    top:"5%",
    left:"1%",
    zIndex:10
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  logoAvatar: {
    width: 300,
    height: 300,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
//   allCard: {
//     width: 400,
//     height: 900
//   },
});

export default function FourPlanets() {
  const navigation = useNavigation();

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

  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ScrollView>
      <View style={styles.button}>
        <Icon
          raised
          name='arrow-left'
          type='font-awesome'
          color='#f50'
          size={20}
          onPress={() => navigation.navigate('Map')} />
      </View>


      <View style={styles.allCard}>
        <Card style={{alignItems: 'center'}}>
          <Card.Title>Jupiter</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("JupiterScreen")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://www.sciencesetavenir.fr/assets/img/2020/09/18/cover-r4x3w1000-5f64bce6c5bc2-heic2017a.jpg',
            }}
          />
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Venus</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("VenusScreen")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/8/f/08ffcdcfe0_50182005_venus-ocean.jpg',
            }}
          />
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Mars</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("MarsScreen")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://www.vaisala.com/sites/default/files/styles/16_9_liftup_extra_large/public/images/LIFT-Mars%20the%20Red%20Planet-1600x900.jpg?itok=YXq-Cv1K',
            }}
          />
        </Card>

        <Card style={{alignItems: 'center'}}>
          <Card.Title>Saturne</Card.Title>
          <Card.Image
            onPress={() => navigation.navigate("SaturneScreen")}
            // style={{ padding: 0 }}
            source={{
              uri:
                'https://services.meteored.com/img/article/en-saturno-llueven-diamantes-263801-1_768.jpg',
            }}
          />
        </Card>
      </View>
    </ScrollView>
    // </View>
  );
}
  