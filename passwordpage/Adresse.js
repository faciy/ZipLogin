import React from 'react'
import { 
    View, 
    StyleSheet,
    TextInput,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Adresse = () => {
    
    const [text, setText] = React.useState('');

    return(
        <View >
            <Text style={styles.text} >Veuillez entrer votre adresse email afin de rénitialiser votre mot de passe</Text>
            <View style={styles.action}>
                 <Ionicons
                    style={styles.userIcon} 
                    name="mail"
                    color="#0092FF"
                    size={20}
                />
                <TextInput 
                    placeholder="Votre adresse email"
                    style={styles.textInput}
                    onChangeText={ () => setText(text)}

                />
            </View> 
        </View>
              
    );
};

export default Adresse;

 const styles = StyleSheet.create({ 
  action: {
    flexDirection: 'row',
    paddingBottom: 5
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
text:{
    textAlign:'center',
    marginBottom:20,
},
  });
