import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Linking
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { IconButton } from 'react-native-paper';

const ButtonAppel = () => {

    const call = () =>{
        Linking.openURL('tel:22541674')
    }

    return(
        <View style={styles.buttonAppel}>
            <View style={styles.textAppel}>
                <FontAwesome
                    style={styles.userIcon} 
                    name="phone"
                    size={30}
                />
                <Text style={styles.appel}>SECRETARAIT</Text>
                <IconButton
                    icon="phone"
                    style={styles.userIconTwo} 
                    size={30}
                    color="#00C506"
                    onPress={call}
                />
                
            </View>
            <View>
                <Text style={styles.appel}>22 54 16 74</Text>
            </View>
            
        </View>
               
    );
};
export default ButtonAppel;

const styles = StyleSheet.create({
    buttonAppel:{
        alignItems:'center'
    },
   userIcon : {
    position: "absolute",
    top:5,
    right:170,  
    },

   userIconTwo: {
    position: "absolute",
    top:-8,
    left:150, 
    },
    appel:{
        right:60
    }

  });

