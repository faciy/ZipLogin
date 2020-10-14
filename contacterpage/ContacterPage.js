import React from 'react'
import { 
    View, 
    StyleSheet,
    Image,
    Text
} from 'react-native';
import {Header } from "native-base";
import logo from '../assets/images/logo.png'
import Appel from './Appel';
import ButtonAppel from './ButtonAppel';
import ButtonMessage from './ButtonMessage';
import Message from './Message'
import Email from './Email'
import ButtonEmail from './ButtonEmail';


const ContatcterPage = () => {
    
    return (
       
            <View style={styles.container}>
               {/* <Header/> */}
                <View style={styles.logo}>
                    <Image 
                    style={styles.logoZip}
                    source={logo}
                    />
                </View>
                <View style={styles.text}>
                    <Text style={styles.textlieu}> 
                    <Text style={styles.ziptext}>ZIP COTE D'IVOIRE</Text>
                    , Abidjan II plateaux Macaci, 
                    246 logements, Appartement 235
                    </Text>
                </View>
                <Appel />
                <ButtonAppel />
                <Message />
                <ButtonMessage />
                <Email />
                <ButtonEmail />
            </View>
    );
};


export default ContatcterPage;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
     
  },
  logo:{
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  logoZip:{
      backgroundColor:'blue',
      width:100,
      height:100,   
  },
  ziptext:{
    fontWeight:'bold'
  },
  text:{
    marginTop:20
  },
  textlieu:{
      textAlign:'center'
  }
 
  
});