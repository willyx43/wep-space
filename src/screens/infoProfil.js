import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    backgroundColor:"transparent",
    position:'absolute',
    top:"5%",
    right:"1%",
    zIndex:10
  },
  // userAvatar: {
  //   marginTop: -300,
  // },
  logoAvatar: {
    width: 300,
    height: 300,
  },
});

export default function InfoProfil() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.button}>
        <Icon
          raised
          name='arrow-right'
          type='font-awesome'
          color='#f50'
          size={20}
          onPress={() => navigation.navigate('Map')} />
      </View>
      <View style={styles.userAvatar}>
        <Image
          style={styles.logoAvatar}
          source={require('../assets/user-avatar.png')}
        />
        <Text>Pseudo :</Text>
        <Text>Nom :</Text>
        <Text>Prénom :</Text>
        <Text>Email :</Text>
      </View>
    </View>
  );
}
