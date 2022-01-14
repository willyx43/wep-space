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
import { Icon } from 'react-native-elements';
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
                  <Text>L'ISS a une vitesse de 28,000 km/h</Text>
                  <Text>Il y a une distance de 408 km entre la Terre et l'ISS</Text>
              </View>
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
