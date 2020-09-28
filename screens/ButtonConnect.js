import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


const ButtonConnect = (props) => {
    
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.btnLogin}>Se connecter  </Text>
            </TouchableOpacity>
        </View>  
    );
};

export default ButtonConnect;

 const styles = StyleSheet.create({ 
   button: {
    marginTop:10,
    alignItems: "center",
    padding: 17,
    justifyContent:'space-between',
    borderRadius:5,
    backgroundColor:'#0092FF',
  },
  btnLogin: {
    color:'white', 
    fontSize:15, 
    fontWeight:'bold',
  },
  });
