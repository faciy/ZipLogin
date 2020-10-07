import React from 'react'
import { 
    View, 
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const FormTwo = () => {
      
    const [pass, setPass] = React.useState({
        password: '',
        secureTextEntry: true
    })
    
    const handleChangePassword = (val) => {
        setPass({
            ...pass,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setPass({
            ...pass,
            secureTextEntry: !pass.secureTextEntry
        })
    }

    return(
            <View style={styles.action}>
                <Ionicons
                    style={styles.userIcon} 
                    name="lock-closed"
                    color="#0092FF"
                    size={20}
                />
                <TextInput 
                    placeholder="NOUVEAU MOT DE PASSE"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry= {pass.secureTextEntry ? true : false}
                    onChangeText={(val) => handleChangePassword(val)}
                />
                    
                <TouchableOpacity
                    style={styles.eye}
                    onPress={updateSecureTextEntry}
                >
                    {pass.secureTextEntry ?
                <Ionicons 
                        name= 'eye-off'
                        color="grey"
                        size={20}
                /> : 
                <Ionicons 
                        name= 'eye'
                        color="grey"
                        size={20}
                />
                    }
                </TouchableOpacity>   
            </View>   
    );
};

export default FormTwo;

 const styles = StyleSheet.create({ 
  action: {
    flexDirection: 'row',
    marginTop: 40
  },
  textInput: {
    flex:1,
    borderBottomWidth:2,
    borderTopWidth:2,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderBottomColor:'#B1B1B1',
    borderTopColor:'#B1B1B1',
    borderRightColor:'#B1B1B1',
    borderLeftColor:'#B1B1B1',
    borderRadius:5,
    paddingHorizontal:40 
},
userIcon : {
    position: "absolute",
    top:16,
    left:10,  
},
eye: {
    position: "absolute",
    top:16,
    right:10, 
}
  });
