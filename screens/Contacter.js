import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contacter = () => {
    
    const navigation = useNavigation();

    const contactbtn = ()=> { navigation.navigate("ContacterPage")}

    return(
        <View>     
            <TouchableOpacity onPress={(contactbtn)}>
                <Text style={styles.support}>Contacter le support</Text>
            </TouchableOpacity> 
        </View>
    );
};

export default Contacter;

 const styles = StyleSheet.create({    
    support: {
        textDecorationLine: 'underline'
    }
  });
