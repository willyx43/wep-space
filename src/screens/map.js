import React, { useState, useEffect, memo } from 'react';
import {
  Image,
  Pressable,
  Modal,
  StyleSheet,
  View,
  // TouchableOpacity,
  Text
} from 'react-native';
import MapboxGL, {MarkerView} from '@react-native-mapbox-gl/maps';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  },
  buttonPlanete: {
    width:30,
    backgroundColor:"transparent",
    position:'absolute',
    top:"20%",
    left:"32%",
    zIndex:10
  },
  markerView: {
    position: 'absolute',
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalDescription: {
    
  },
  modalText: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: "center"
  },
  modalImg: {
    width: 300,
    height: 150
  }
});

export default function MapScreen() {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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

  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // console.log('This will be called every 2 seconds');
  //     fetchFunction();
  //   }, 2000);
  
  //   return () => clearInterval(interval);
  // }, []);


  const Marker = ({coordinate, id, title, description, img}) => {
    return (
      <MapboxGL.PointAnnotation coordinate={coordinate} id={id} >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <Text style={styles.modalDescription}>{description}</Text>
          <Image
          style={styles.modalImg}
          source={{uri: img}}
        />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View>
          <Icon
            id={id}
            coordinate={coordinate}
            raised
            name='circle'
            type='font-awesome'
            color='#f50'
            size={10}
            onPress={() => setModalVisible(true)} />
        </View>
      </MapboxGL.PointAnnotation>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} zoomEnabled>
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
            coordinate={[longitude, latitude]}
          />
          <Marker
            coordinate={[-80.60416666666666, 28.6083333]}
            id="1"
            title="Complexe de lancement 39"
            description="Le complexe de lancement 39 ou LC-39 est un ensemble d'installations de la NASA utilisé pour assembler et lancer les engins spatiaux les plus emblématiques du programme de l'agence spatiale américaine : la fusée Saturn V, la navette spatiale américaine."
            img="https://upload.wikimedia.org/wikipedia/commons/7/7a/VAB_Aerial_-_GPN-2000-000869.jpg"
          >
          </Marker>
          <Marker
            coordinate={[-70.40444444444445, -24.6275]}
            id="2"
            title="ELT"
            description="L’organisation européenne ESO s’est lancée dans la construction au milieu du désert chilien du Extremely Large Telescope, dit « ELT ». Le télescope et sa structure atteignent un volume comparable à huit fois celui de l’Arc de Triomphe de Paris."
            img="https://www.sciencesetavenir.fr/assets/img/2017/05/29/cover-r4x3w1000-592c24ea48383-000-b67p9.jpg"
          >
          </Marker>
          <Marker
            coordinate={[4.782492, 45.6953537]}
            id="3"
            title="Observatoire de Lyon"
            description="L'observatoire de Lyon est un observatoire astronomique professionnel dont le site historique est situé à Saint-Genis-Laval, près de Lyon. Créé par décret en 1878 par le président Mac Mahon et fondé par l'astronome Charles André, c'est aujourd'hui un observatoire des sciences de l'univers ainsi qu'une école interne de l'université Claude-Bernard-Lyon-I qui réunit le Centre de recherche astrophysique de Lyon (CRAL) et le Laboratoire de géologie de Lyon : Terre, planètes, environnement (LGL-TPE)."
            img="https://upload.wikimedia.org/wikipedia/commons/0/03/Observatoire_Lyon_Coudee.JPG"
          >
          </Marker>
          <Marker
            coordinate={[-52.76888888888889, 5.2308333]}
            id="4"
            title="Centre spatial guyanais"
            description="Le Centre spatial guyanais, en abrégé CSG, est une base de lancement française et européenne située en Guyane française (Amérique du Sud) sur les territoires des communes de Kourou et de Sinnamary. Le CSG est la base de lancement de l'Agence spatiale européenne (ESA) et de l'Agence de l'Union européenne pour le programme spatial (EUSPA)."
            img="https://upload.wikimedia.org/wikipedia/commons/e/ea/Apollo_Saturn_500F_and_VAB.jpg"
          >
          </Marker>
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
        <View style={styles.buttonPlanete}>
          <Icon
            raised
            name='globe'
            type='font-awesome'
            color='#f50'
            onPress={() => navigation.navigate("FourPlanets")} />
        </View>
      </View>
    </View>
  );
}
