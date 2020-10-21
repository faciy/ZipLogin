import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';
import Accueil from '../ShoppingPage/Accueil'
import Fond from '../assets/images/Fond.png'


const ShoppingPage = () => {

    return (
        <ImageBackground source={Fond} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Courses</Text>
                </View>
                
                <View style={styles.footer}>
                    <Accueil />
                    {/* <Bottom /> */}
                </View>
            </View>
            </ImageBackground>
        
    );
};


export default ShoppingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
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
      paddingHorizontal:5,

  },
  text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
  },
  image: {
    flex: 1,
  },


});