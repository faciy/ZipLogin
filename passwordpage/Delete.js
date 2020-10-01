import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Validate from './Validate';
import { useNavigation } from '@react-navigation/native';

const Delete = () => {
  
  const navigation = useNavigation();

  const btnDelete = ()=> { navigation.goBack()}

    return(
        <View style={styles.delete}>
            <TouchableOpacity style={styles.button} onPress={(btnDelete)}>
            <Text style={styles.btnDelete}>ANNULER</Text>
            </TouchableOpacity>
            <Validate />
        </View>  
    );
};

export default Delete;

 const styles = StyleSheet.create({ 
   button: {
    marginTop:60,
    padding: 17,
    borderRadius:5,
    backgroundColor:'#0092FF',
    paddingRight:40,
  },
  btnDelete: {
    color:'white', 
    fontSize:15, 
    fontWeight:'bold',
    left:10
  },
  delete:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  }
  });
