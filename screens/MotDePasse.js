import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Contacter from '../screens/Contacter';


const MotDePasse = () => {
    
    return(
        <View style={styles.forget}>
            <TouchableOpacity >
                <Text style={styles.mdp}>Mot de passe oublié</Text >
            </TouchableOpacity>
            <Contacter />
        </View>
    );
};

export default MotDePasse;

 const styles = StyleSheet.create({ 
   forget:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    },
    mdp: {
        textDecorationLine: 'underline',
    },
   
   
  });
