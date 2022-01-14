import React from 'react';
import {
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  tinyLogo: {
      width: 250,
      height: 250,
  },
  item: {
      display: 'flex',
      alignItems: 'center'
  },
  name: {
      fontSize: 20
  },
  flatList: {
      marginTop: 20,
      alignItems: 'center'
  },
  button: {
      backgroundColor:"transparent",
      position:'absolute',
      top:"3%",
      left:"1%",
      zIndex:10
    },
  footerList: {
    marginTop: 20
  }
});

export default function IssIno() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [moon, setMoon] = React.useState(0);
  const navigation = useNavigation();

  // React.useEffect(() => {
      async function fetchFunction() {
      try {
          const response = await fetch('http://api.open-notify.org/astros.json');
          const json = await response.json();
          // console.log(json);
          setMoon(json.people);
      }
      catch(err) {
              throw err;
          }
      }
      // fetchFunction();
  // }, []);


  const Item = ({ name, craft }) => (
      <View style={styles.item}>
          {craft === 'ISS' ? <Text style={styles.name}>{name}</Text>: null }            
      </View>
    );

  const renderItem = ({ item }) => (
      <Item 
      name={item.name}
      craft={item.craft} />
    );
  
  return (
      <View style={{ flex: 1}}>
        <View style={styles.button}>
          <Icon
          raised
          name='arrow-left'
          type='font-awesome'
          color='#f50'
          size={20}
          onPress={() => navigation.goBack()} />
        </View>
        
        <View style={styles.flatList}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Image
                    style={styles.tinyLogo}
                    source={require("../assets/iss.jpeg")}
                >
                </Image>
                </View>
                <Text style={{fontSize: 20}} >Personne dans l'ISS actuellement :</Text>
              </>
            }
            ListFooterComponent={
              <>
                <View style={styles.footerList}>
                    <Text style={{fontSize: 15}} >L'ISS a une vitesse de 28,000 km/h</Text>
                    <Text style={{fontSize: 15}} >Il y a une distance de 408 km entre la Terre et l'ISS</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 30}} >Missions :</Text>
                </View>
                <Card style={{alignItems: 'center'}}>
                    <Card.Title>Soyouz MS-18</Card.Title>
                    <Card.Image
                      style={{ padding: 0 }}
                      source={{
                        uri:
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Expedition_64_Crew_Qualification_Exams_%28NHQ202009220006%29.jpg/300px-Expedition_64_Crew_Qualification_Exams_%28NHQ202009220006%29.jpg',
                      }}
                    />
                    <Text h4>
                    9 avril 2021
                    </Text>
                </Card>
                <Card style={{alignItems: 'center'}}>
                    <Card.Title>SpaceX Crew-2</Card.Title>
                    <Card.Image
                      style={{ padding: 0 }}
                      source={{
                        uri:
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/SpaceX_Crew-2_crew.jpg/300px-SpaceX_Crew-2_crew.jpg',
                      }}
                    />
                    <Text h4>
                    23 avril 2021
                    </Text>
                </Card>
                <Card style={{alignItems: 'center'}}>
                    <Card.Title>Soyouz MS-19</Card.Title>
                    <Card.Image
                      style={{ padding: 0 }}
                      source={{
                        uri:
                          'https://kosmosnews.fr/wp-content/uploads/2021/09/SMS-19-Equipage-principal-photo-officielle_01.jpg',
                      }}
                    />
                    <Text h4>
                    5 octobre 2021
                    </Text>
                </Card>
                <Card style={{alignItems: 'center'}}>
                    <Card.Title>SpaceX Crew-3</Card.Title>
                    <Card.Image
                      style={{ padding: 0 }}
                      source={{
                        uri:
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SpaceX_Crew-3_%28official_portrait%29.jpg/300px-SpaceX_Crew-3_%28official_portrait%29.jpg',
                      }}
                    />
                    <Text h4>
                    11 novembre 2021
                    </Text>
                </Card>
              </>
            }
            refreshControl={
              <RefreshControl
              refreshing={refreshing}
              onRefresh={() => fetchFunction()}
              />
            }
            data={moon}
            renderItem={renderItem}
            keyExtractor={item => item.people}
          />
        </View>
      </View>
  );
}
