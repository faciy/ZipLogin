import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import ResetValidate from './ResetValidate'
import { useNavigation } from '@react-navigation/native';

const ResetDelete = () => {

  const navigation = useNavigation();

  const Annuler = ()=> { navigation.goBack()}
  const valider = () =>{
    console.log('press')
  }

    return(
        
        <View style={styles.delete}>
            <TouchableOpacity style={styles.button} onPress={(Annuler)}>
            <Text style={styles.btnDelete}>ANNULER</Text>
            </TouchableOpacity>
            <ResetValidate onPress={() => valider()} />
        </View>  
    );
};

export default ResetDelete;

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
