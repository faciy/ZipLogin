import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Login = () => {

const [text, setText] = React.useState('');


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>www.zip.com</Text>
                <View style={styles.logo}>
                    <Text style={styles.titlelogo}> zip</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.action}>
            
                    <TextInput
                    style={styles.textInput}
                    label="Nom d'utilisateur"
                    mode="outlined"
                    value={text}
                    left={<TextInput.Icon 
                        name="email"
                        color="#090994"
                        />}
                    onChangeText={text => setText(text)}
                    />
                </View>

                <View style={styles.action}>
            
                    <TextInput
                    style={styles.textInput}
                    label="Mot de passe"
                    secureTextEntry={true}
                    mode="outlined"
                    value={text}
                    left={<TextInput.Icon 
                        name="lock"
                        color="#090994"
                        />}
                    right={<TextInput.Icon 
                        name="eye-off"
                        color="#B1B1B1"
                        />}
                 
                    />
                </View>

                <View style={styles.btn}>
            
                    <TouchableOpacity
                        style={styles.button3}
                        onPress={() => {}}
                    >
                    <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>
                            Se connecter
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.forget}>
                        <Text 
                            style={{textDecorationLine: 'underline'
                            }}>
                            Mot de passe oublié
                        </Text >
                        <Text style={{fontSize:23, color:'#B1B1B1'}}>| </Text>
                            <Text style={{textDecorationLine: 'underline'
                            }}>
                            Contacter le support
                        </Text>
                </View>
                <View style={{alignItems:'center'}}>
                            <AntDesign
                            style={{
                                fontSize:100,
                                
                            }} 
                            name="minus"
                            />

                </View>
            </View>
        </View>
    );
};

export default Login;

// const {height} = Dimensions.get("screen");
// const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#090994'
  },
  header: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
      
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  titlelogo: {
      fontSize: 70,
      color:'white',
      fontWeight:'bold'
  },
  title: {
      color: '#B1B1B1',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:100,
  },
  action: {
    flexDirection: 'row',
    paddingBottom: 5
},
textInput: {
    flex: 1,
    backgroundColor:'white',
   
},
button3: {
    marginTop:6,
    alignItems: "center",
    padding: 20,
    justifyContent:'space-between',
    borderRadius:5,
    backgroundColor:'#090994',
  },
forget:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25,
    
}

});