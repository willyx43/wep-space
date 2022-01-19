import React from 'react';
import {
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
      <Text>Profil</Text>
    </View>
  );
}
