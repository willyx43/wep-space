import React, {useEffect, useContext, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../AuthProvider';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
// import firebase from 'firebase';

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
});

export default function EditProfil() {
  const navigation = useNavigation();
  const {user, logout} = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  // const update = {
  //   displayName: 'Alias',
  //   photoURL: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg',
  // };
  
  const uploadPhoto = async() => {
    // let imgUrl = await image();

    // if( imgUrl == null && userData.userImg ) {
    //   imgUrl = userData.userImg;
    // }

    firestore()
    .collection('users')
    .doc(user.uid)
    .update({
      userImg: image,
    })
  }
  

  // console.log(user);

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
  }, [user]);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      this.bs.current.snapTo(1);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.button}>
        <Icon
          raised
          name='arrow-left'
          type='font-awesome'
          color='#f50'
          size={20}
          onPress={() => navigation.navigate('InfoProfil')} />
      </View>

      

      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      
      <Image
        style={styles.userImg}
        source={{uri: userData ? userData.userImg : 'https://avatarfiles.alphacoders.com/160/thumb-160241.jpg'}}
      />
      <TouchableOpacity onPress={uploadPhoto}>
        <Text style={styles.panelTitle}>Changer photo de profil</Text>
      </TouchableOpacity>
    </View>
  );
}
  