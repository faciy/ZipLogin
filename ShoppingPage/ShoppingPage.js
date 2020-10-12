import React from 'react'
import { 
    View, 
    StyleSheet,
    Text
} from 'react-native';
import Accueil from '../ShoppingPage/Accueil'
// import Search from './Search'


const ShoppingPage = () => {

    return (
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Courses</Text>
                </View>
                <View style={styles.footer}>
                    <Accueil />
                    {/* <Search />  */}
                </View>
            </View>
        
    );
};


export default ShoppingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
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
      paddingHorizontal:5,

  },
  text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
  }

});