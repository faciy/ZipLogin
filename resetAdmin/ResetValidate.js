import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


const ResetValidate = () => {
    
    return(
        <View style={styles.Validate}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.btnValide}>VALIDER</Text>
            </TouchableOpacity>
        </View>  
    );
};

export default ResetValidate;

 const styles = StyleSheet.create({ 
   button: {
    marginTop:60,
    padding: 17,
    borderRadius:5,
    backgroundColor:'#0092FF',
    paddingLeft:50
  },
  btnValide: {
    color:'white', 
    fontSize:15, 
    fontWeight:'bold', 
    right:20  
  },
  
  });
