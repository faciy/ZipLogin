import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Linking,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { IconButton } from 'react-native-paper';
import phone from '../assets/images/phone-logo-hi1.png'

const ButtonAppel = () => {

    const call = () =>{
        Linking.openURL('tel:22541674')
    }

    return(
        <View style={styles.buttonAppel}>
            <View style={styles.textAppel}>
                <Image
                    style={styles.userIcon} 
                    source={phone}
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
    top:8,
    right:170,
    height:30,
    width:30 
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

