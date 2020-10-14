import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Linking
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconButton, Icon } from 'react-native-paper';

const ButtonMessage = () => {

    const message = () =>{
        Linking.openURL('sms:89254064')
    }

    return(
        <View style={styles.ButtonMessage}>
            <View style={styles.textMessage}>
                <Ionicons
                    style={styles.userIcon} 
                    name="mail"
                    size={30}
                />
                <Text style={styles.message}>MESSAGE</Text>
                    <IconButton
                    icon="email"
                    style={styles.userIconTwo} 
                    size={30}
                    color="#00C506"
                    onPress={() => {}}
                    />
            </View>
            <View>
                <Text style={styles.message}>22 54 16 74</Text>
            </View>
            
        </View>
               
    );
};
export default ButtonMessage;

const styles = StyleSheet.create({
    ButtonMessage:{
        alignItems:'center'
    },
   userIcon : {
    position: "absolute",
    top:5,
    right:150,  
    },

   userIconTwo: {
    position: "absolute",
    top:-8,
    left:140, 
    },
    message:{
        right:60
    }

  });

