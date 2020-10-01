import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Contacter from '../screens/Contacter';
import { useNavigation } from '@react-navigation/native';

const MotDePasse = () => {

    const navigation = useNavigation();

    const PassPage = ()=> { navigation.navigate("PasswordPage")}

    return (
        <View style={styles.forget}>
            <TouchableOpacity onPress={(PassPage)}>
                <Text style={styles.mdp}>Mot de passe oublié</Text>
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
