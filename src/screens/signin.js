import React, {useState, useContext} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import { AuthContext } from '../AuthProvider';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <View style={styles.master}>
      <Text style={styles.header}>Sign in to WEP Space</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />



      <View style={styles.link}>
        <Text style={styles.text}>Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.text}>Sign up Here.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.link}>
        <Text style={styles.text}>Or Sign in with FaceBook </Text>
      </View>

      <FormButton
        buttonTitle="Login With FaceBook"
        onPress={() => fbLogin()}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  fb: {
    marginTop: 30,
    alignSelf: 'center'
  },
  master: {
    padding: 16,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 18,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Signin;