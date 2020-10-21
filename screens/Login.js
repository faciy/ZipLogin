import React from 'react'
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

import bg from '../assets/images/bg.png'


const Login = () => {

    
    
    return (
       <ScrollView style={styles.scrollView}>
          <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.footer}>
                    <Username />
                    <Password />
                    <ButtonConnect />
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