import React, {useState} from 'react'
import axios from 'axios';
import { 
    View, 
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
import Header from './Header'
import Username from './Username'
import Password from './Password'
import ButtonConnect from './ButtonConnect'
import MotDePasse from './MotDePasse'
import { useNavigation } from '@react-navigation/native';

import bg from '../assets/images/bg.png'



const Login = () => {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getAuth = () =>{ 
    
    const user = {
      authCredentialsDto:
      {
          userName : username,
          password : password
      }
    }
    axios
    .post('http://api-staging.app-zip.com/api/auths/signin', user)
    .then(res => console.warn(res))
    .catch(err => console.log(err))
  };

    
    return (
      
       <ScrollView style={styles.scrollView}>
          <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.footer}>
                    <Username onChangeText={(text) => setUsername(text)} />
                    <Password onChangeText={(text) => setPassword(text)}  />
                    <ButtonConnect onPress={() => getAuth()} />
                    <MotDePasse />
                </View>
            </View>
            </ImageBackground>
        </ScrollView>
    );
};


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView:{
    backgroundColor:'white',
  },
  header: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  image: {
    flex: 1,
  },

});