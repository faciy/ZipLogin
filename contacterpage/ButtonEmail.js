import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';

const ButtonEmail = () => {

  const email = () =>{
    Linking.openURL('mailto:info@zip.ci')
}
    
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={email}>
            <Text style={styles.btnLogin}>ECRIRE UN MAIL</Text>
            </TouchableOpacity>
        </View>  
    );
};

export default ButtonEmail;

 const styles = StyleSheet.create({ 
   button: {
    marginTop:10,
    alignItems: "center",
    padding: 16,
    backgroundColor:'#0092FF',
    marginVertical:30,
    marginHorizontal:30,
    borderRadius:5
    
  },
  btnLogin: {
    color:'white', 
    fontSize:15, 
    fontWeight:'bold',
   
  },
  });
