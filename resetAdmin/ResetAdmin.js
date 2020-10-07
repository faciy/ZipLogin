import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import FormOne from '../resetAdmin/FormOne'
import FormTwo from '../resetAdmin/FormTwo'
import ResetDelete from './ResetDelete';


const ResetAdmin = () => {

    return (
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Courses</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.resetText}>Veuillez remplir le formulaire pour changer votre mot de passe</Text>
                   <FormOne />
                   <FormTwo />
                   <ResetDelete />
                </View>
            </View>
       
        
    );
};


export default ResetAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    backgroundColor: '#090994'
  },
  header: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical:-200
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal:20,

  },
  text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
  },
  resetText:{
      textAlign:'center',
      fontSize:20,
  }
  

});