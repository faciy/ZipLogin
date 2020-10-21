import React from 'react'
import { 
    View, 
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
import Header from './Header'
import Adresse from './Adresse'
import Delete from './Delete'
import bg from '../assets/images/bg.png'
import logo from '../assets/images/zip-icon-resized.png'


const PasswordPage = () => {
    
    return (
        <ScrollView style={styles.scrollView}>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.header}>
                   <Header />
                </View>
                <View style={styles.footer}>
                    <Adresse />
                    <Delete />
                </View>
            </View>
            </ImageBackground>
        </ScrollView>
    );
};


export default PasswordPage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#090994'
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