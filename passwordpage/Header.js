import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground
} from 'react-native';
import zipLogos from '../assets/images/zipLogos.png'


const Header = () => {
    return(
        <View style={styles.textheader}>
                <View style={styles.zip}>
                    <Text style={styles.title}>www.zip.com</Text>
                </View>
                <View style={styles.logo}>
                    <ImageBackground 
                    style={styles.logoZip}
                    source={zipLogos}
                    />
                </View>
        </View>
               
    );
};
export default Header;

const styles = StyleSheet.create({
    zip: {
        marginVertical:10,
    },
    titlelogo: {
        fontSize: 70,
        color:'white',
        fontWeight:'bold',
        paddingRight:20
        
    },
    title: {
        color: '#B1B1B1',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        bottom:40
    },
  
    logoZip: {
     width:165,
     height:70,
    },
    logo:{
        marginTop:30,
        bottom:30
    },
    textheader: {
        marginTop:180,
    }

  });

