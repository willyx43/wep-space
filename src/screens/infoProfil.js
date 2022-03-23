import React, {useState, useEffect, useContext} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import { AuthContext } from '../AuthProvider';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
  button: {
    backgroundColor:"transparent",
    position:'absolute',
    top:"5%",
    right:"1%",
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
});

export default function InfoProfil() {
  const navigation = useNavigation();
  const {user, logout} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  console.log(user)

  const getUser = async() => {
    await firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);


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

        <Text style={styles.userName}>{user.displayName}</Text>
        <Text style={styles.aboutUser}>
        Email : {user.email}
        </Text>
        <Image
          style={styles.userImg}
          source={{uri: user.photoURL ? userData : 'https://avatarfiles.alphacoders.com/160/thumb-160241.jpg'}}
        />
        <Text style={styles.aboutUser}>
        Date de création : {user.creationTime ? userData.createdAt.toDate().toDateString() || 'No details added.' : user.metadata.creationTime}
        {console.log(user.metadata.creationTime)}
        </Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
            <Text style={styles.userBtnTxt}>Logout</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
