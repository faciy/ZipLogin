import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


const Contacter = () => {
    
    return(
        <View>     
            <TouchableOpacity>
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
